namespace Server;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Collections.Concurrent;

class Program
{
    // Конкурентный словарь для хранения всех подключенных клиентов
    static ConcurrentDictionary<int, StreamWriter> clients = new ();
    static int nextClientId = 1;
    
    static async Task Main(string[] args)
    {
        TcpListener listener = new(IPAddress.Any, 3003);
        listener.Start();
        Console.WriteLine("Server started. Waiting for a connection...");

        while (true)
        {
            TcpClient client = await listener.AcceptTcpClientAsync();
            int clientId = nextClientId++;
            Console.WriteLine($"Client {clientId} connected.");
            

            _ = Task.Run(async () =>
            {
                try
                {
                    using (client)
                    using (NetworkStream stream = client.GetStream())
                    using (StreamReader reader = new StreamReader(stream, Encoding.UTF8))
                    using (StreamWriter writer = new StreamWriter(stream, Encoding.UTF8) { AutoFlush = true })
                    {
                        // Добавляем клиента в словарь
                        clients.TryAdd(clientId, writer);
                        
                        try
                        {
                            string message;
                            while ((message = await reader.ReadLineAsync()) != null)
                            {
                                Console.WriteLine($"Client {clientId}: {message}");
                                
                                if (message.ToLower() == "quit")
                                {
                                    Console.WriteLine($"Client {clientId} is disconnecting.");
                                    break;
                                }
                                
                                if (string.IsNullOrEmpty(message))
                                    continue;
                                await BroadcastMessage(clientId, $"Client {clientId}: {message}");
                            }
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"Error reading from client {clientId}: {ex.Message}");
                        }
                        finally
                        {
                            clients.TryRemove(clientId, out _);
                            Console.WriteLine($"Client {clientId} connection closed.");
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error handling client {clientId}: {ex.Message}");
                    clients.TryRemove(clientId, out _);
                }
            });
        }
    }
    

    static async Task BroadcastMessage(int senderId, string message)
    {
        foreach (var kvp in clients)
        {
            int clientId = kvp.Key;
            StreamWriter writer = kvp.Value;
            
            if (clientId != senderId) // Не отправляем сообщение отправителю
            {
                try
                {
                    await writer.WriteLineAsync(message);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error sending to client {clientId}: {ex.Message}");
                }
            }
        }
    }
}
namespace Network_Lesson_3;
using System.Net.Sockets;
using System.Text;

class Program
{ 
    static async Task Main(string[] args)
    {
        try
        {
            using var client = new TcpClient();
            await client.ConnectAsync("127.0.0.1", 3003);
            using var networkStream = client.GetStream();
            using var writer = new StreamWriter(networkStream, Encoding.UTF8) { AutoFlush = true };
            using var reader = new StreamReader(networkStream, Encoding.UTF8);
    
            Console.WriteLine("Connecting to server...");
            
            var readTask = Task.Run(async () => 
            {
                try 
                {
                    string serverMessage;
                    while ((serverMessage = await reader.ReadLineAsync()) != null)
                    {
                        Console.WriteLine(serverMessage);
                
                        if (serverMessage.ToLower() == "quit")
                        {
                            Console.WriteLine("Server closed the connection.");
                            break;
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error receiving: {ex.Message}");
                }
            });
            
            while (true)
            {
                string message = Console.ReadLine();
        
                if (string.IsNullOrEmpty(message))
                    continue;
            
                await writer.WriteLineAsync(message);
        
                if (message.ToLower() == "quit")
                {
                    Console.WriteLine("Disconnecting from server...");
                    break;
                }
            }
            
            await readTask;
        }
        catch (Exception e)
        {
            Console.WriteLine($"Client error: {e.Message}");
        }
    }
}
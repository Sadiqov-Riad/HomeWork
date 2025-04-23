using System.Net.Sockets;
using System.Text;

using var client = new TcpClient();
await client.ConnectAsync("192.168.0.101", 3003);

using NetworkStream stream = client.GetStream();
using var reader = new StreamReader(stream, Encoding.UTF8);
using var writer = new StreamWriter(stream, Encoding.UTF8) { AutoFlush = true };

while (true)
{
    string boardState = await reader.ReadLineAsync(); 
    string status = await reader.ReadLineAsync();     

    Console.Clear();
    for (int i = 0; i < 9; i += 3)
        Console.WriteLine($"{boardState[i]}|{boardState[i + 1]}|{boardState[i + 2]}");

    Console.WriteLine(status);

    if (status is "Игрок победил!" or "Сервер победил!" or "Ничья.")
        break;

    if (status == "Ход клиента")
    {
        Console.Write("Ваш ход (0-8): ");
        string move = Console.ReadLine();
        await writer.WriteLineAsync(move);
    }
}
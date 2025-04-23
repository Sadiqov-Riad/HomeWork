using System.Net;
using System.Net.Sockets;
using System.Text;

var clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);

var address = IPAddress.Parse("127.0.0.1");
var serverEndPoint = new IPEndPoint(address, 3003);
var buffer = new byte[1024];

try
{
    clientSocket.Connect(serverEndPoint);
    
    while (true)
    {
        Console.WriteLine("Enter message to send to server or type 'quit' to exit:");
        string sentMessage = Console.ReadLine();

        byte[] messageBytes = Encoding.UTF8.GetBytes(sentMessage);
        clientSocket.Send(messageBytes);
        Console.WriteLine($"Sent message: {sentMessage}");
        
        if (sentMessage.ToLower() == "quit")
        {
            clientSocket.Shutdown(SocketShutdown.Both);
            clientSocket.Close();
            break;
        }
        
        var bytesRead = clientSocket.Receive(buffer); 
        var receivedMessage = Encoding.UTF8.GetString(buffer, 0, bytesRead);
        Console.WriteLine($"Received message: {receivedMessage}");
    }
}
catch (Exception e)
{
    Console.WriteLine(e);
}
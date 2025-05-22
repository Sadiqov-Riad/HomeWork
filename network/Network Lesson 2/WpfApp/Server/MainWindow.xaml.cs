using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Server
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Socket serverSocket;
        private bool isServerRunning;
        private CancellationTokenSource cancellationTokenSource;
        private readonly object lockObject = new object();
        private readonly ConcurrentDictionary<Socket, ClientInfo> connectedClients = new ConcurrentDictionary<Socket, ClientInfo>();
        private Socket currentClient;
        
        public MainWindow()
        {
            InitializeComponent();
        }

        private async void StartServerButton_Click(object sender, RoutedEventArgs e)
        {
            try
            {
                serverSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                var address = IPAddress.Parse("127.0.0.1");
                var endPoint = new IPEndPoint(address, 3003);
                
                serverSocket.Bind(endPoint);
                serverSocket.Listen(100);
                
                LogMessage($"Server started. Listening on {endPoint.Address}:{endPoint.Port}");
                isServerRunning = true;
                StatusTextBlock.Text = "Running";
                
                StartServerButton.IsEnabled = false;
                StopServerButton.IsEnabled = true;
                
                cancellationTokenSource = new CancellationTokenSource();
                
                await Task.Run(() => AcceptClientsAsync(cancellationTokenSource.Token));
            }
            catch (Exception ex)
            {
                LogMessage($"Error starting server: {ex.Message}");
                CleanupServer();
            }
        }

        private async Task AcceptClientsAsync(CancellationToken cancellationToken)
        {
            try
            {
                while (!cancellationToken.IsCancellationRequested && isServerRunning)
                {
                    Socket clientSocket = await Task.Factory.FromAsync(
                        serverSocket.BeginAccept, 
                        serverSocket.EndAccept, 
                        null);
                    
                    var clientInfo = new ClientInfo
                    {
                        Socket = clientSocket,
                        EndPoint = clientSocket.RemoteEndPoint.ToString()
                    };
                    
                    connectedClients.TryAdd(clientSocket, clientInfo);
                    
                    App.Current.Dispatcher.Invoke(() => 
                    {
                        LogMessage($"Client connected: {clientInfo.EndPoint}");
                        currentClient = clientSocket;
                        SendButton.IsEnabled = true;
                    });
                    
                    // Start a task to receive messages from this client
                    _ = Task.Run(() => ReceiveMessagesAsync(clientSocket, cancellationToken));
                }
            }
            catch (Exception ex)
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    App.Current.Dispatcher.Invoke(() =>
                    {
                        LogMessage($"Error accepting clients: {ex.Message}");
                    });
                }
            }
        }

        private async Task ReceiveMessagesAsync(Socket clientSocket, CancellationToken cancellationToken)
        {
            var buffer = new byte[1024];
            
            try
            {
                while (!cancellationToken.IsCancellationRequested && clientSocket.Connected)
                {
                    int bytesRead = await Task.Factory.FromAsync<int>(
                        (callback, state) => clientSocket.BeginReceive(buffer, 0, buffer.Length, SocketFlags.None, callback, state),
                        clientSocket.EndReceive,
                        null);
                        
                    if (bytesRead > 0)
                    {
                        string receivedMessage = Encoding.UTF8.GetString(buffer, 0, bytesRead);
                        
                        App.Current.Dispatcher.Invoke(() =>
                        {
                            LogMessage($"Received from {connectedClients[clientSocket].EndPoint}: {receivedMessage}");
                        });
                        
                        if (receivedMessage.ToLower() == "quit")
                        {
                            CloseClientConnection(clientSocket);
                            break;
                        }
                    }
                    else
                    {
                        // Client disconnected
                        CloseClientConnection(clientSocket);
                        break;
                    }
                }
            }
            catch (Exception ex)
            {
                if (!cancellationToken.IsCancellationRequested)
                {
                    App.Current.Dispatcher.Invoke(() =>
                    {
                        LogMessage($"Error receiving message: {ex.Message}");
                        CloseClientConnection(clientSocket);
                    });
                }
            }
        }

        private void CloseClientConnection(Socket clientSocket)
        {
            try
            {
                if (connectedClients.TryRemove(clientSocket, out ClientInfo clientInfo))
                {
                    App.Current.Dispatcher.Invoke(() =>
                    {
                        LogMessage($"Client disconnected: {clientInfo.EndPoint}");
                        
                        if (clientSocket == currentClient)
                        {
                            currentClient = connectedClients.Keys.FirstOrDefault();
                            SendButton.IsEnabled = currentClient != null;
                        }
                    });
                }
                
                if (clientSocket.Connected)
                {
                    clientSocket.Shutdown(SocketShutdown.Both);
                    clientSocket.Close();
                }
            }
            catch (Exception ex)
            {
                App.Current.Dispatcher.Invoke(() =>
                {
                    LogMessage($"Error closing client connection: {ex.Message}");
                });
            }
        }

        private void StopServerButton_Click(object sender, RoutedEventArgs e)
        {
            CleanupServer();
            LogMessage("Server stopped");
            
            StatusTextBlock.Text = "Not Running";
            StartServerButton.IsEnabled = true;
            StopServerButton.IsEnabled = false;
            SendButton.IsEnabled = false;
        }

        private void CleanupServer()
        {
            isServerRunning = false;
            
            // Cancel any pending operations
            if (cancellationTokenSource != null)
            {
                cancellationTokenSource.Cancel();
                cancellationTokenSource.Dispose();
                cancellationTokenSource = null;
            }
            
            // Close all client connections
            foreach (var client in connectedClients.Keys.ToList())
            {
                CloseClientConnection(client);
            }
            
            connectedClients.Clear();
            
            // Close server socket
            if (serverSocket != null)
            {
                if (serverSocket.Connected)
                {
                    serverSocket.Shutdown(SocketShutdown.Both);
                }
                
                serverSocket.Close();
                serverSocket = null;
            }
        }

        private void SendButton_Click(object sender, RoutedEventArgs e)
        {
            if (currentClient != null && currentClient.Connected && !string.IsNullOrEmpty(MessageTextBox.Text))
            {
                SendMessageToClient(currentClient, MessageTextBox.Text);
                MessageTextBox.Clear();
            }
        }

        private async void SendMessageToClient(Socket clientSocket, string message)
        {
            try
            {
                byte[] messageBytes = Encoding.UTF8.GetBytes(message);
                
                await Task.Factory.FromAsync(
                    (callback, state) => clientSocket.BeginSend(messageBytes, 0, messageBytes.Length, SocketFlags.None, callback, state),
                    clientSocket.EndSend,
                    null);
                
                LogMessage($"Sent to {connectedClients[clientSocket].EndPoint}: {message}");
            }
            catch (Exception ex)
            {
                LogMessage($"Error sending message: {ex.Message}");
                CloseClientConnection(clientSocket);
            }
        }

        private void LogMessage(string message)
        {
            LogTextBox.AppendText($"[{DateTime.Now:HH:mm:ss}] {message}{Environment.NewLine}");
            LogTextBox.ScrollToEnd();
        }

        private void Window_Closing(object sender, System.ComponentModel.CancelEventArgs e)
        {
            CleanupServer();
        }
    }

    public class ClientInfo
    {
        public Socket Socket { get; set; }
        public string EndPoint { get; set; }
    }
}
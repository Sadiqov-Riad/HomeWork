using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

namespace Client
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private Socket clientSocket;
        private bool isConnected = false;
        private readonly byte[] buffer = new byte[1024];

        public MainWindow()
        {
            InitializeComponent();
            messagesTextBox.AppendText("Not connected. Press Connect to start.\n");
        }

        private void ConnectButton_Click(object sender, RoutedEventArgs e)
        {
            if (isConnected)
            {
                DisconnectFromServer();
            }
            else
            {
                ConnectToServer();
            }
        }

        private async void ConnectToServer()
        {
            try
            {
                clientSocket = new Socket(AddressFamily.InterNetwork, SocketType.Stream, ProtocolType.Tcp);
                var address = IPAddress.Parse("127.0.0.1");
                var serverEndPoint = new IPEndPoint(address, 3003);

                await Task.Run(() => clientSocket.Connect(serverEndPoint));
                
                isConnected = true;
                connectButton.Content = "Disconnect";
                messagesTextBox.AppendText("Connected to server.\n");
                
                // Start receiving messages
                ReceiveMessages();
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error connecting to server: {ex.Message}", "Connection Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void DisconnectFromServer()
        {
            try
            {
                if (clientSocket != null && clientSocket.Connected)
                {
                    // Send quit message
                    SendMessage("quit");
                    
                    clientSocket.Shutdown(SocketShutdown.Both);
                    clientSocket.Close();
                }
                
                isConnected = false;
                connectButton.Content = "Connect";
                messagesTextBox.AppendText("Disconnected from server.\n");
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error disconnecting: {ex.Message}", "Disconnection Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private async void ReceiveMessages()
        {
            try
            {
                while (isConnected && clientSocket.Connected)
                {
                    Array.Clear(buffer, 0, buffer.Length);
                    
                    int bytesRead = await Task.Run(() => clientSocket.Receive(buffer));
                    
                    if (bytesRead > 0)
                    {
                        var receivedMessage = Encoding.UTF8.GetString(buffer, 0, bytesRead);
                        Dispatcher.Invoke(() =>
                        {
                            messagesTextBox.AppendText($"Received: {receivedMessage}\n");
                            messagesTextBox.ScrollToEnd();
                        });
                    }
                }
            }
            catch (Exception ex)
            {
                if (isConnected)
                {
                    Dispatcher.Invoke(() =>
                    {
                        messagesTextBox.AppendText($"Connection error: {ex.Message}\n");
                        isConnected = false;
                        connectButton.Content = "Connect";
                    });
                }
            }
        }

        private void SendButton_Click(object sender, RoutedEventArgs e)
        {
            SendCurrentMessage();
        }

        private void MessageInputTextBox_KeyDown(object sender, KeyEventArgs e)
        {
            if (e.Key == Key.Enter)
            {
                SendCurrentMessage();
            }
        }

        private void SendCurrentMessage()
        {
            if (!isConnected)
            {
                MessageBox.Show("Please connect to the server first.", "Not Connected", MessageBoxButton.OK, MessageBoxImage.Warning);
                return;
            }
            
            var message = messageInputTextBox.Text.Trim();
            if (!string.IsNullOrEmpty(message))
            {
                SendMessage(message);
                messageInputTextBox.Clear();
            }
        }

        private void SendMessage(string message)
        {
            try
            {
                byte[] messageBytes = Encoding.UTF8.GetBytes(message);
                clientSocket.Send(messageBytes);
                
                messagesTextBox.AppendText($"Sent: {message}\n");
                messagesTextBox.ScrollToEnd();
                
                if (message.ToLower() == "quit")
                {
                    DisconnectFromServer();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show($"Error sending message: {ex.Message}", "Send Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        protected override void OnClosing(System.ComponentModel.CancelEventArgs e)
        {
            // Ensure we disconnect when closing the application
            if (isConnected)
            {
                DisconnectFromServer();
            }
            
            base.OnClosing(e);
        }
    }
}
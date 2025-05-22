using System.Net;
using System.Net.Sockets;
using System.Text;

char[] board = Enumerable.Repeat(' ', 9).ToArray();


TcpListener listener = new(IPAddress.Any, 3003);
listener.Start();
Console.WriteLine("Ждём игрока...");

using TcpClient client = await listener.AcceptTcpClientAsync();
using NetworkStream stream = client.GetStream();
using var reader = new StreamReader(stream, Encoding.UTF8);
using var writer = new StreamWriter(stream, Encoding.UTF8) { AutoFlush = true };

Console.WriteLine("Игрок подключился. Вы играете крестиками (X).");

void ShowBoard()
{
    Console.Clear();
    Console.WriteLine($"{board[0]}|{board[1]}|{board[2]}\n-+-+-\n{board[3]}|{board[4]}|{board[5]}\n-+-+-\n{board[6]}|{board[7]}|{board[8]}");
}

bool CheckWin(char symbol) =>
    (board[0] == symbol && board[1] == symbol && board[2] == symbol) ||
    (board[3] == symbol && board[4] == symbol && board[5] == symbol) ||
    (board[6] == symbol && board[7] == symbol && board[8] == symbol) ||
    (board[0] == symbol && board[3] == symbol && board[6] == symbol) ||
    (board[1] == symbol && board[4] == symbol && board[7] == symbol) ||
    (board[2] == symbol && board[5] == symbol && board[8] == symbol) ||
    (board[0] == symbol && board[4] == symbol && board[8] == symbol) ||
    (board[2] == symbol && board[4] == symbol && board[6] == symbol);

bool IsDraw() => board.All(c => c != ' ');

while (true)
{
    ShowBoard();
    Console.Write("Ваш ход (0-8): ");
    if (!int.TryParse(Console.ReadLine(), out int move) || move < 0 || move > 8 || board[move] != ' ')
    {
        Console.WriteLine("Некорректный ход!");
        continue;
    }
    board[move] = 'X';

    if (CheckWin('X'))
    {
        await writer.WriteLineAsync(string.Join("", board));
        await writer.WriteLineAsync("Сервер победил!");
        break;
    }

    if (IsDraw())
    {
        await writer.WriteLineAsync(string.Join("", board));
        await writer.WriteLineAsync("Ничья.");
        break;
    }

    await writer.WriteLineAsync(string.Join("", board));
    await writer.WriteLineAsync("Ход клиента");
    
    string? clientMoveStr = await reader.ReadLineAsync();
    if (!int.TryParse(clientMoveStr, out int clientMove) || clientMove < 0 || clientMove > 8 || board[clientMove] != ' ')
        continue;

    board[clientMove] = 'O';

    if (CheckWin('O'))
    {
        await writer.WriteLineAsync(string.Join("", board));
        await writer.WriteLineAsync("Игрок победил!");
        break;
    }

    if (IsDraw())
    {
        await writer.WriteLineAsync(string.Join("", board));
        await writer.WriteLineAsync("Ничья.");
        break;
    }

    await writer.WriteLineAsync(string.Join("", board));
    await writer.WriteLineAsync("Ход сервера");
}

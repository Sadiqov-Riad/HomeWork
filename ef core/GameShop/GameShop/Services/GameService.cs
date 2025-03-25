using Microsoft.EntityFrameworkCore;

namespace GameShop.Services;

public class GameService
{
    private readonly GameStoreContext _context;

    public GameService(GameStoreContext context)
    {
        _context = context;
    }

    public void ShowCatalog()
    {
        var games = _context.Games.ToList();
        foreach (var game in games)
        {
            Console.WriteLine($"{game.Id}: {game.Title} - {game.Price} манат");
        }
    }

    public void BuyGame(int userId, int gameId)
    {
        var user = _context.Users.Find(userId);
        var game = _context.Games.Find(gameId);
        if (user == null || game == null)
        {
            Console.WriteLine("Пользователь или игра не найдены.");
            return;
        }

        if (user.Balance < game.Price)
        {
            Console.WriteLine("Недостаточно средств.");
            return;
        }

        user.Balance -= game.Price;
        var order = new Order { UserId = userId, Date = DateTime.Now, TotalAmount = game.Price, OrderDetails = new List<OrderDetails> { new OrderDetails() { GameId = gameId, TotalPrice = game.Price } } };
        _context.Orders.Add(order);
        _context.SaveChanges();
        Console.WriteLine("Покупка успешно завершена!");
    }

    public List<Genre> GetGenres()
    {
        return _context.Genres.ToList();
    }

    public List<Platform> GetPlatforms()
    {
        return _context.Platforms.ToList();
    }
    
    public void ShowOrderHistory(int userId)
    {
        var orders = _context.Orders.Where(o => o.UserId == userId).Include(o => o.OrderDetails).ToList();
        foreach (var order in orders)
        {
            Console.WriteLine($"Заказ {order.Id} от {order.Date}: {order.TotalAmount} манат");
            foreach (var item in order.OrderDetails)
            {
                var game = _context.Games.Find(item.GameId);
                Console.WriteLine($"  - {game.Title})");
            }
        }
    }

    public void AddGame(string title, Genre genre, Platform platform, decimal price)
    {
        var game = new Game { Title = title, Genre = genre, Platform = platform, Price = price };
        _context.Games.Add(game);
        _context.SaveChanges();
        Console.WriteLine("Игра добавлена!");
    }
    

    public void RemoveGame(int gameId)
    {
        var game = _context.Games.Find(gameId);
        if (game == null)
        {
            Console.WriteLine("Игра не найдена.");
            return;
        }
        _context.Games.Remove(game);
        _context.SaveChanges();
        Console.WriteLine("Игра удалена!");
    }

    public void EditGame(int gameId, string title, Genre genre, Platform platform, decimal price)
    {
        var game = _context.Games.Find(gameId);
        if (game == null)
        {
            Console.WriteLine("Игра не найдена.");
            return;
        }
        game.Title = title;
        game.Genre = genre;
        game.Platform = platform;
        game.Price = price;
        _context.SaveChanges();
        Console.WriteLine("Игра обновлена!");
    }
}

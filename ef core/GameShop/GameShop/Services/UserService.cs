namespace GameShop.Services;

public class UserService
{
    private readonly GameStoreContext _context;

    public UserService(GameStoreContext context)
    {
        _context = context;
    }

    public bool Register(string name, string email, string password)
    {
        if (_context.Users.Any(u => u.Email == email))
        {
            return false;
        }

        var user = new User
        {
            Name = name,
            Email = email,
            Password = password,
            Balance = 0
        };

        _context.Users.Add(user);
        _context.SaveChanges();
        return true;
    }

    public User Login(string email, string password)
    {
        var user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        if (user == null)
        {
            return null;
        }
        return user;
    }

    public void ShowUserInfo(int userId)
    {
        var user = _context.Users.Find(userId);
        if (user == null)
        {
            Console.WriteLine("Пользователь не найден.");
            return;
        }
        Console.WriteLine($"ID: {user.Id}, Имя: {user.Name}, Email: {user.Email}, Баланс: {user.Balance} манат");
    }
    
    public decimal GetBalance(int userId)
    {
        var user = _context.Users.Find(userId);
        return user?.Balance ?? 0;
    }
    
    public void AddBalance(int userId, decimal amount)
    {
        var user = _context.Users.Find(userId);
        if (user == null) return;
        user.Balance += amount;
        _context.SaveChanges();
    }

    public int GetIdByEmail(string email)
    {
        var user = _context.Users.FirstOrDefault(u => u.Email == email);
        return user.Id;
    }
    
}
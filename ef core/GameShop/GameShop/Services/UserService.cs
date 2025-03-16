namespace GameShop.Services;

public class UserService
{
    private readonly GameStoreContext _context;

    public UserService(GameStoreContext context)
    {
        _context = context;
    }

    public void Register(string name, string email, string password)
    {
        if (_context.Users.Any(u => u.Email == email))
        {
            Console.WriteLine("Email уже используется.");
            return;
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
        Console.WriteLine("Регистрация успешна!");
    }

    public User Login(string email, string password)
    {
        var user = _context.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
        if (user == null)
        {
            Console.WriteLine("Неверный email или пароль.");
            return null;
        }
        Console.WriteLine("Вход выполнен успешно!");
        return user;
    }

    public void AddBalance(int userId, decimal amount)
    {
        var user = _context.Users.Find(userId);
        if (user == null) return;
        user.Balance += amount;
        _context.SaveChanges();
        Console.WriteLine($"Баланс пополнен! Новый баланс: {user.Balance}");
    }
}
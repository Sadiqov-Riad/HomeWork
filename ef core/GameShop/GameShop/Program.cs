using GameShop;
using GameShop.Services;

using var context = new GameStoreContext();
var userService = new UserService(context);
var gameService = new GameService(context);

while (true)
{
    Console.WriteLine("1. Регистрация\n2. Вход\n3. Выход");
    string choice = Console.ReadLine();
            
    switch (choice)
    {
        case "1":
            Register(userService);
            break;
        case "2":
            Login(userService, gameService);
            break;
        case "3":
            return;
        default:
            Console.WriteLine("Неверный ввод. Попробуйте снова.");
            break;
    }
}

static void Register(UserService userService)
{
    Console.Write("Имя: ");
    string name = Console.ReadLine();
    Console.Write("Email: ");
    string email = Console.ReadLine();
    Console.Write("Пароль: ");
    string password = Console.ReadLine();

    if (userService.Register(name, email, password))
    {
        Console.WriteLine("Регистрация успешна!");
    }
    else
    {
        Console.WriteLine("Ошибка регистрации. Возможно, пользователь уже существует.");
    }
}

static void Login(UserService userService, GameService gameService)
{
    Console.Write("Email: ");
    string email = Console.ReadLine();
    Console.Write("Пароль: ");
    string password = Console.ReadLine();

    var user = userService.Login(email, password);
    if (user != null)
    {
        Console.WriteLine($"Добро пожаловать, {user.Name}!");
        UserMenu(user, gameService, userService);
    }
    else
    {
        Console.WriteLine("Неверные данные");
    }
}

static void UserMenu(User user, GameService gameService, UserService userService)
{
    
    while (true)
    {
        
        Console.WriteLine("1. Просмотр каталога игр\n2. Пополнить баланс\n3. Купить игру\n4. Моя информация\n6. Выйти");
        if (user.Name == "Admin")
        {
            Console.WriteLine("7. Добавить игру\n8. Удалить игру\n9. Редактировать игру");
        }
        string choice = Console.ReadLine();
        
        switch (choice)
        {
            case "1":
                gameService.ShowCatalog();
                break;
            case "2":
                Console.Write("Введите сумму: ");
                if (decimal.TryParse(Console.ReadLine(), out decimal amount))
                {
                    userService.AddBalance(user.Id, amount);
                    Console.WriteLine($"Баланс пополнен! Текущий баланс: {userService.GetBalance(user.Id)}");
                }
                else
                {
                    Console.WriteLine("Ошибка ввода");
                }
                break;
            case "3":
                Console.Write("Введите ID игры: ");
                if (int.TryParse(Console.ReadLine(), out int gameId))
                {
                    gameService.BuyGame(user.Id, gameId);
                }
                else
                {
                    Console.WriteLine("Ошибка ввода");
                }
                break;
            case "4":
                userService.ShowUserInfo(user.Id);
                break;
            case "5":
                return;
            case "6" when user.Name == "Admin":
                Console.Write("Введите название игры: ");
                string title = Console.ReadLine();
                
                var genres = gameService.GetGenres();
                Console.WriteLine("Выберите жанр:");
                Console.WriteLine("1.Action\n2.Adventure\n3.Horror\n4.Romance\n");
                int genreIndex = int.Parse(Console.ReadLine()) - 1;
                
                var platforms = gameService.GetPlatforms();
                Console.WriteLine("Выберите платформу:");
                Console.WriteLine("1.Playstation\n2.Xbox\n3.PC\n4.Nintendo Switch\n");
                int platformIndex = int.Parse(Console.ReadLine()) - 1;
                
                Console.Write("Введите цену: ");
                if (decimal.TryParse(Console.ReadLine(), out decimal price))
                {
                    gameService.AddGame(title, genres[genreIndex], platforms[platformIndex], price);
                    Console.WriteLine("Игра добавлена!");
                }
                else
                {
                    Console.WriteLine("Ошибка ввода");
                }
                break;
            case "7" when user.Name == "Admin":
                Console.Write("Введите ID игры для удаления: ");
                if (int.TryParse(Console.ReadLine(), out int deleteGameId))
                {
                    gameService.RemoveGame(deleteGameId);
                    Console.WriteLine("Игра удалена!");
                }
                else
                {
                    Console.WriteLine("Ошибка ввода");
                }
                break;
            case "8" when user.Name == "Admin":
                Console.Write("Введите ID игры для редактирования: ");
                if (int.TryParse(Console.ReadLine(), out int editGameId))
                {
                    Console.Write("Введите новое название игры: ");
                    string newTitle = Console.ReadLine();
                    
                    var Genres = gameService.GetGenres(); 
                    var Platforms = gameService.GetPlatforms(); 
                    
                    Console.WriteLine("Выберите новый жанр:");
                    Console.WriteLine("1.Action\n2.Adventure\n3.Horror\n4.Romance\n");
                    int newGenreIndex = int.Parse(Console.ReadLine()) - 1;

                    Console.WriteLine("Выберите новую платформу:");
                    Console.WriteLine("1.Playstation\n2.Xbox\n3.PC\n4.Nintendo Switch\n");
                    int newPlatformIndex = int.Parse(Console.ReadLine()) - 1;

                    Console.Write("Введите новую цену: ");

                    if (decimal.TryParse(Console.ReadLine(), out decimal newPrice))
                    {
                        gameService.EditGame(editGameId, newTitle, Genres[newGenreIndex], Platforms[newPlatformIndex], newPrice);
                        Console.WriteLine("Игра обновлена!");
                    }
                    else
                    {
                        Console.WriteLine("Ошибка ввода");
                    }
                }
                else
                {
                    Console.WriteLine("Ошибка ввода");
                }
                break;
            default:
                Console.WriteLine("Неверный ввод");
                break;
        }
    }
}

using GameShop;
using GameShop.Services;

using var context = new GameStoreContext();
var userService = new UserService(context);
var gameService = new GameService(context);

        while (true)
        {
            Console.WriteLine("1. Регистрация\n2. Вход\n3. Выход");
            string choice = Console.ReadLine();
            if (choice == "1")
            {
                Console.Write("Имя: ");
                string name = Console.ReadLine();
                Console.Write("Email: ");
                string email = Console.ReadLine();
                Console.Write("Пароль: ");
                string password = Console.ReadLine();
                userService.Register(name, email, password);
            }
            else if (choice == "2")
            {
                Console.Write("Email: ");
                string email = Console.ReadLine();
                Console.Write("Пароль: ");
                string password = Console.ReadLine();
                var user = userService.Login(email, password);
                if (user != null) UserMenu(user, userService, gameService);
            }
            else if (choice == "3") break;
        }

    static void UserMenu(User user, UserService userService, GameService gameService)
    {
        while (true)
        {
            Console.WriteLine("1. Пополнить баланс\n2. Просмотр каталога\n3. Купить игру\n4. История покупок\n5. Админ (CRUD игр)\n6. Выйти");
            string choice = Console.ReadLine();
            if (choice == "1")
            {
                decimal amount = GetDecimalInput("Сумма: ");
                userService.AddBalance(user.Id, amount);
            }
            else if (choice == "2")
            {
                gameService.ShowCatalog();
            }
            else if (choice == "3")
            {
                int gameId = GetIntInput("ID игры: ");
                gameService.BuyGame(user.Id, gameId);
            }
            else if (choice == "4")
            {
                gameService.ShowOrderHistory(user.Id);
            }
            else if (choice == "5" && user.Email == "admin@example.com")
            {
                AdminMenu(gameService);
            }
            else if (choice == "6") break;
        }
    }

    static void AdminMenu(GameService gameService)
    {
        while (true)
        {
            Console.WriteLine("1. Добавить игру\n2. Удалить игру\n3. Назад");
            string choice = Console.ReadLine();
            if (choice == "1")
            {
                Console.Write("Название: ");
                string title = Console.ReadLine();
                Console.Write("Жанр: ");
                string genre = Console.ReadLine();
                Console.Write("Платформа: ");
                string platform = Console.ReadLine();
                decimal price = GetDecimalInput("Цена: ");
                
            }
            else if (choice == "2")
            {
                int gameId = GetIntInput("ID игры: ");
                gameService.RemoveGame(gameId);
            }
            else if (choice == "3") break;
        }
    }

    static int GetIntInput(string prompt)
    {
        int result;
        while (true)
        {
            Console.Write(prompt);
            if (int.TryParse(Console.ReadLine(), out result)) break;
            Console.WriteLine("Ошибка: Введите целое число.");
        }
        return result;
    }

    static decimal GetDecimalInput(string prompt)
    {
        decimal result;
        while (true)
        {
            Console.Write(prompt);
            if (decimal.TryParse(Console.ReadLine(), out result)) break;
            Console.WriteLine("Ошибка: Введите корректное число.");
        }

        return result;
    }
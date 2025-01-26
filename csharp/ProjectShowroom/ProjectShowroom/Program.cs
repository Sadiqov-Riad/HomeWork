using ProjectShowroom;
using ProjectShowroom.Data;

UserService authSystem = new UserService();
ShowroomService service = new ShowroomService();

while (true)
{
    Console.WriteLine("1. Register\n2. Login\n3. Exit");
    string userInput = Console.ReadLine();

    switch (userInput)
    {
        case "1":
            Console.Write("Enter username: ");
            string regUsername = Console.ReadLine();

            Console.Write("Enter password: ");
            string regPassword = Console.ReadLine();

            var registerDto = new RegisterDTO(regUsername, regPassword);

            if (!ValidateService.ValidateRegister(registerDto))
            {
                Console.WriteLine("Invalid username or password.");
            }
            else
            {
                authSystem.RegisterUser(registerDto);
                Console.WriteLine("Registration successful.");
            }
            break;

        case "2":
            Console.Write("Enter username: ");
            string logUsername = Console.ReadLine();
            Console.Write("Enter password: ");
            string logPassword = Console.ReadLine();

            var loginDto = new LoginDTO(logUsername, logPassword);

            if (!ValidateService.ValidateLogin(loginDto))
            {
                Console.WriteLine("Invalid username or password.");
            }
            else
            {
                var user = authSystem.LoginUser(loginDto);
                if (user != null)
                {
                    Console.WriteLine("Login successful.");
                    ManageShowrooms(service); 
                }
                else
                {
                    Console.WriteLine("Login failed.");
                }
            }
            break;

        case "3":
            return;

        default:
            Console.WriteLine("Invalid option.");
            break;
    }
}

static void ManageShowrooms(ShowroomService service)
{
    while (true)
    {
        Console.WriteLine("\n1. Create Showroom\n2. Edit Showroom\n3. Delete Showroom\n4. Display Showrooms\n5. Logout");
        Console.Write("Choose an option: ");
        var choice = Console.ReadLine();

        switch (choice)
        {
            case "1":
                Console.Write("Enter showroom name: ");
                var name = Console.ReadLine();
                Console.Write("Enter showroom capacity: ");
                if (int.TryParse(Console.ReadLine(), out var capacity))
                {
                    service.CreateShowroom(name, capacity);
                }
                else
                {
                    Console.WriteLine("Invalid capacity.");
                }
                break;

            case "2":
                Console.Write("Enter showroom ID to edit: ");
                if (Guid.TryParse(Console.ReadLine(), out var editId))
                {
                    Console.Write("Enter new name: ");
                    var newName = Console.ReadLine();
                    Console.Write("Enter new capacity: ");
                    if (int.TryParse(Console.ReadLine(), out var newCapacity))
                    {
                        service.EditShowroom(editId, newName, newCapacity);
                    }
                    else
                    {
                        Console.WriteLine("Invalid capacity.");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid ID.");
                }
                break;

            case "3":
                Console.Write("Enter showroom ID to delete: ");
                if (Guid.TryParse(Console.ReadLine(), out var deleteId))
                {
                    service.DeleteShowroom(deleteId);
                }
                else
                {
                    Console.WriteLine("Invalid ID.");
                }
                break;

            case "4":
                service.DisplayShowrooms();
                break;

            case "5":
                Console.WriteLine("Logging out...");
                return;

            default:
                Console.WriteLine("Invalid option.");
                break;
        }
    }
}
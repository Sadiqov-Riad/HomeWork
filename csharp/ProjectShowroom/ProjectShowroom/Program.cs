using ProjectShowroom;
using ProjectShowroom.Data;
using ProjectShowroom.Interfaces;

UserService userService = new UserService();
ShowroomService showroomService = new ShowroomService();

while (true)
{
    Console.WriteLine("1. Register\n2. Login\n3. Create Showroom\n4. Delete Showroom\n5. Edit Showroom\n6. Show Showrooms\n7. Exit");
    Console.Write("Choose an option: ");
    var choice = Console.ReadLine();

    switch (choice)
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
                userService.RegisterUser(registerDto);
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
                var user = userService.LoginUser(loginDto);
                if (user != null)
                {
                    Console.WriteLine("Login successful.");

                    var showrooms = showroomService.Showrooms;
                    if (showrooms.Count == 0)
                    {
                        Console.WriteLine("No showrooms available.");
                        break;
                    }

                    Console.WriteLine("Select a showroom:");
                    for (int i = 0; i < showrooms.Count; i++)
                    {
                        Console.WriteLine($"{i + 1}. {showrooms[i].Name} (Capacity: {showrooms[i].CarCapacity})");
                    }

                    Console.Write("Enter showroom number: ");
                    if (int.TryParse(Console.ReadLine(), out var showroomChoice) && showroomChoice > 0 && showroomChoice <= showrooms.Count)
                    {
                        var selectedShowroom = showrooms[showroomChoice - 1];
                        Console.WriteLine($"Selected showroom: {selectedShowroom.Name}");

                        ManageCars(selectedShowroom);
                    }
                    else
                    {
                        Console.WriteLine("Invalid showroom choice.");
                    }
                }
                else
                {
                    Console.WriteLine("Login failed.");
                }
            }
            break;

        case "3":
            Console.Write("Enter showroom name: ");
            var name = Console.ReadLine();
            Console.Write("Enter showroom capacity: ");
            if (int.TryParse(Console.ReadLine(), out var capacity))
            {
                showroomService.CreateShowroom(name, capacity);
                Console.WriteLine("Showroom created successfully.");
            }
            else
            {
                Console.WriteLine("Invalid capacity.");
            }
            break;

        case "4":
            Console.Write("Enter showroom ID to delete: ");
            if (Guid.TryParse(Console.ReadLine(), out var deleteId))
            {
                showroomService.DeleteShowroom(deleteId);
                Console.WriteLine("Showroom deleted successfully.");
            }
            else
            {
                Console.WriteLine("Invalid ID.");
            }
            break;

        case "5":
            Console.Write("Enter showroom ID to edit: ");
            if (Guid.TryParse(Console.ReadLine(), out var editId))
            {
                Console.Write("Enter new name: ");
                var newName = Console.ReadLine();
                Console.Write("Enter new capacity: ");
                if (int.TryParse(Console.ReadLine(), out var newCapacity))
                {
                    showroomService.EditShowroom(editId, newName, newCapacity);
                    Console.WriteLine("Showroom updated successfully.");
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

        case "6":
            showroomService.DisplayShowrooms();
            break;

        case "7":
            return;

        default:
            Console.WriteLine("Invalid option.");
            break;
    }
}

void ManageCars(Showroom showroom)
{
    while (true)
    {
        Console.WriteLine("1. Add Car\n2. Edit Car\n3. Delete Car\n4. Show Cars\n5. Back");
        Console.Write("Choose an option: ");
        var choice = Console.ReadLine();

        switch (choice)
        {
            case "1":
                Console.Write("Enter car brand: ");
                var carModel = Console.ReadLine();
                Console.Write("Enter car model: ");
                var CarManufacturerAdd = Console.ReadLine();
                Console.Write("Enter car price: ");
                if (decimal.TryParse(Console.ReadLine(), out var carPrice))
                {
                    showroom.AddCar(new Car(carModel, CarManufacturerAdd, carPrice));
                    Console.WriteLine("Car added successfully.");
                }
                else
                {
                    Console.WriteLine("Invalid price.");
                }
                break;


            case "2":
                Console.Write("Enter car ID to edit: ");
                if (Guid.TryParse(Console.ReadLine(), out var editCarId))
                {
                    Console.Write("Enter new brand: ");
                    var newCarModel = Console.ReadLine();
                    Console.Write("Enter car model: ");
                    var CarManufacturerEdit = Console.ReadLine();
                    Console.Write("Enter new price: ");
                    if (decimal.TryParse(Console.ReadLine(), out var newCarPrice))
                    {
                        showroom.EditCar(editCarId, newCarModel, CarManufacturerEdit, newCarPrice);

                        Console.WriteLine("Car updated successfully.");
                    }
                    else
                    {
                        Console.WriteLine("Invalid price.");
                    }
                }
                else
                {
                    Console.WriteLine("Invalid car ID.");
                }
                break;

            case "3":
                Console.Write("Enter car ID to delete: ");
                if (Guid.TryParse(Console.ReadLine(), out var deleteCarId))
                {
                    showroom.RemoveCar(deleteCarId);
                    Console.WriteLine("Car deleted successfully.");
                }
                else
                {
                    Console.WriteLine("Invalid car ID.");
                }
                break;

            case "4":
                showroom.DisplayCars();
                break;

            case "5":
                return;

            default:
                Console.WriteLine("Invalid option.");
                break;
        }
    }
}

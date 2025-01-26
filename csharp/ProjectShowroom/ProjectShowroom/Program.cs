using ProjectShowroom;
using ProjectShowroom.Data;

        var service = new ShowroomService();

        while (true)
        {
            Console.WriteLine("1. Create Showroom\n2. Edit Showroom\n3. Delete Showroom\n4. Display Showrooms\n5. Exit");
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
                    return;
                default:
                    Console.WriteLine("Invalid option.");
                    break;
            }
        }
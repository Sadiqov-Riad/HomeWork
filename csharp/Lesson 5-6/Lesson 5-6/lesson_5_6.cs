class Park
{
    public List<Transport> vehicles = new List<Transport>();

    public void ShowMenu()
    {
        Console.WriteLine("------MENU------\n");
        Console.WriteLine("1. Add a vehicle");
        Console.WriteLine("2. Show all vehicles");
        Console.WriteLine("3. Start a vehicle");
        Console.WriteLine("4. Remove a vehicle");
        Console.WriteLine("5. Filter vehicles by type");
        Console.WriteLine("6. Exit");
        Console.WriteLine("----------------\n");
        Console.Write("Enter your choice: ");
    }

    public void AddTransport()
    {
        Console.WriteLine("Select type of vehicle:");
        Console.WriteLine("1. Car");
        Console.WriteLine("2. Truck");
        Console.WriteLine("3. Bike");
        Console.WriteLine("4. Bus");
        Console.Write("Enter choice to Add: ");
        string vehicleType = Console.ReadLine();

        Console.WriteLine("Enter Brand");
        string brand = Console.ReadLine();
        Console.Write("Enter model: ");
        string model = Console.ReadLine();

        int year;
        while (true)
        {
            Console.Write("Enter year: ");
            string input = Console.ReadLine();
            if (int.TryParse(input, out year) && year > 0)
            {
                break;
            }
            Console.WriteLine("Invalid input! Please enter a valid year.");
        }

        int maxSpeed;
        while (true)
        {
            Console.Write("Enter max speed: ");
            string input = Console.ReadLine();
            if (int.TryParse(input, out maxSpeed))
            {
                break;
            }
            Console.WriteLine("Invalid input! Please enter a valid speed.");
        }

        switch (vehicleType)
        {
            case "1":
                FuelType fuel;
                while (true)
                {
                    Console.WriteLine("Enter Fuel (1 - Petrol, 2 - Diesel, 3 - Electro): ");
                    string input = Console.ReadLine();
                    if (int.TryParse(input, out int fuelValue) && Enum.IsDefined(typeof(FuelType), fuelValue))
                    {
                        fuel = (FuelType)fuelValue;
                        break;
                    }
                    Console.WriteLine("Invalid input! Please enter a valid Fuel Type.");
                }
                vehicles.Add(new Car("Car", brand, model, year, maxSpeed, fuel));
                break;
            case "2":
                int loadCapacity;
                while (true)
                {
                    Console.WriteLine("Enter load capacity: ");
                    string input = Console.ReadLine();
                    if (int.TryParse(input, out loadCapacity))
                    {
                        break;
                    }
                    Console.WriteLine("Invalid input! Please enter a valid Load Capacity.");
                }
                vehicles.Add(new Truck("Truck", brand, model, year, maxSpeed, loadCapacity));
                break;
            case "3":
                bool hasSidecar;
                while (true)
                {
                    Console.WriteLine("Does the bike have pedals? (true/false): ");
                    string input = Console.ReadLine();
                    if (bool.TryParse(input, out hasSidecar))
                    {
                        break;
                    }
                    Console.WriteLine("Invalid input! Please enter a valid value.");
                }
                vehicles.Add(new Bike("Bike", brand, model, year, maxSpeed, hasSidecar));
                break;
            case "4":
                int passengerCapacity;
                while (true)
                {
                    Console.WriteLine("Enter Passenger Capacity: ");
                    string input = Console.ReadLine();
                    if (int.TryParse(input, out passengerCapacity))
                    {
                        break;
                    }
                    Console.WriteLine("Invalid input! Please enter a valid Passenger Capacity.");
                }
                vehicles.Add(new Bus("Bus", brand, model, year, maxSpeed, passengerCapacity));
                break;
            default:
                Console.WriteLine("Invalid Input! ");
                break;
        }
    }

    public void ShowAllVehicles()
    {
        if (vehicles.Count == 0)
        {
            Console.WriteLine("No vehicles in the park.");
            return;
        }

        for (int i = 0; i < vehicles.Count; i++)
        {
            Console.WriteLine($"{i + 1})");
            vehicles[i].ShowInfo();
            Console.WriteLine();
        }
    }

    public void StartTransport()
    {
        ShowAllVehicles();
        if (vehicles.Count == 0) return;

        Console.WriteLine("Choose index Transport to Move: ");
        int index = int.Parse(Console.ReadLine());
        if (index >= 0 && index < vehicles.Count)
        {
            vehicles[index].Move();
        }
        else
        {
            Console.WriteLine("Invalid Input! ");
        }
    }

    public void RemoveTransport()
    {
        ShowAllVehicles();
        Console.WriteLine("Enter index to Remove the transport: ");
        int index = int.Parse(Console.ReadLine());

        if (index > 0 && index < vehicles.Count)
        {
            vehicles.RemoveAt(index);
        }
        else
        {
            Console.WriteLine("Invalid Input");
        }
    }

    public void FilterTransport()
    {
        Console.WriteLine("Enter transport Type: ");
        string type = Console.ReadLine();
        for (int i = 0; i < vehicles.Count; i++)
        {
            if (vehicles[i].Type == type)
            {
                vehicles[i].ShowInfo();
                Console.WriteLine();
            }
        }
    }
}

class Program
{
    static void Main()
    {
        Park park = new Park();
        bool exit = false;

        while (!exit)
        {
            park.ShowMenu();
            string choice = Console.ReadLine();
            switch (choice)
            {
                case "1":
                    park.AddTransport();
                    break;
                case "2":
                    park.ShowAllVehicles();
                    break;
                case "3":
                    park.StartTransport();
                    break;
                case "4":
                    park.RemoveTransport();
                    break;
                case "5":
                    park.FilterTransport();
                    break;
                case "6":
                    exit = true;
                    break;
                default:
                    Console.WriteLine("Invalid choice!!!");
                    break;
            }
        }
    }
}

class Transport
{
    public string Type { get; set; }
    public string Brand { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public int MaxSpeed { get; set; }

    protected Transport(string type, string brand, string model, int year, int maxSpeed)
    {
        Type = type;
        Brand = brand;
        Model = model;
        Year = year;
        MaxSpeed = maxSpeed;
    }

    public virtual void ShowInfo()
    {
        Console.WriteLine($"Type: {Type}");
        Console.WriteLine($"Brand: {Brand}");
        Console.WriteLine($"Model: {Model}");
        Console.WriteLine($"Year: {Year}");
        Console.WriteLine($"MaxSpeed: {MaxSpeed}");
    }

    public virtual void Move()
    {
        Console.WriteLine($"The {Brand}\n{Model} vehicle is traveling on the road at a speed of up to {MaxSpeed} km/h.");
    }
}

enum FuelType
{
    Petrol = 1,
    Diesel,
    Electro
}

class Car : Transport
{
    public FuelType FuelType { get; set; }

    public Car(string type, string brand, string model, int year, int maxSpeed, FuelType fuelType) : base(type, brand, model, year, maxSpeed)
    {
        FuelType = fuelType;
    }

    public override void Move()
    {
        Console.WriteLine($"The {Brand}\n{Model} car is traveling on the road at a speed of up to {MaxSpeed} km/h.");
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Fuel Type: {FuelType}");
    }
}

class Truck : Transport
{
    public int LoadCapacity { get; set; }

    public Truck(string type, string brand, string model, int year, int maxSpeed, int loadCapacity) : base(type, brand, model, year, maxSpeed)
    {
        LoadCapacity = loadCapacity;
    }

    public override void Move()
    {
        Console.WriteLine($"Truck {Brand} {Model} is transporting cargo.");
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Load Capacity: {LoadCapacity}");
    }
}

class Bike : Transport
{
    public bool HasSidecar { get; set; }

    public Bike(string type, string brand, string model, int year, int maxSpeed, bool hasSidecar) : base(type, brand, model, year, maxSpeed)
    {
        HasSidecar = hasSidecar;
    }

    public override void Move()
    {
        Console.WriteLine($"A {Brand} {Model} motorcycle is speeding down the road.");
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Has a Sidecar: {HasSidecar}");
    }
}

class Bus : Transport
{
    public int PassengerCapacity { get; set; }

    public Bus(string type, string brand, string model, int year, int maxSpeed, int passengerCapacity) : base(type, brand, model, year, maxSpeed)
    {
        PassengerCapacity = passengerCapacity;
    }

    public override void Move()
    {
        Console.WriteLine($"The {Brand} {Model} bus carries passengers.");
    }

    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Passenger Capacity: {PassengerCapacity}");
    }
}

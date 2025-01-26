using System.Security.Cryptography;
using System.Text.Json;

namespace ProjectShowroom;

public class Showroom
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public int CarCapacity { get; set; }
    public List<Car> Cars { get; set; } = new();
    public int SalesCount { get; set; }

    public List<Showroom> Showrooms { get; set; } = new();
    private const string FilePath = "./Data/Showroom.json";
    
    public Showroom(string name, int carCapacity)
    {
        Name = name;
        CarCapacity = carCapacity;
    }

    private void SaveData()
    {
        var allShowrooms = LoadData();

        var showroom = allShowrooms.FirstOrDefault(s => s.Id == this.Id);
        if (showroom != null)
        {
            showroom.Cars = this.Cars;
        }
        else
        {
            allShowrooms.Add(this);
        }
        var json = JsonSerializer.Serialize(allShowrooms, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(FilePath, json);
        Console.WriteLine("Showroom data saved successfully.");
    }

    private List<Showroom> LoadData()
    {
        if (File.Exists(FilePath))
        {
            var json = File.ReadAllText(FilePath);
            if (!string.IsNullOrWhiteSpace(json))
            {
                return JsonSerializer.Deserialize<List<Showroom>>(json) ?? new List<Showroom>();
            }
        }

        return new List<Showroom>();
    }


    
    public void AddCar(Car car)
    {
        LoadData();
        
        if (Cars.Count >= CarCapacity)
        {
            Console.WriteLine("Cannot add car. Showroom is at full capacity.");
            return;
        }

        Cars.Add(car);
        SaveData();
        Console.WriteLine("Car added successfully!");
    }

    public void RemoveCar(Guid carId)
    {
        LoadData();
        var car = Cars.FirstOrDefault(c => c.Id == carId);
        if (car == null)
        {
            Console.WriteLine("Car not found.");
            return;
        }
        
        Cars.Remove(car);
        SaveData();
        Console.WriteLine("Car removed successfully!");
    }


    public void EditCar(Guid carId, string newModel, string newManufacturer, decimal newPrice)
    {
        LoadData();
        var car = Cars.FirstOrDefault(c => c.Id == carId);
        if (car == null)
        {
            Console.WriteLine("Car not found.");
            return;
        }
        car.Brand = newModel;
        car.Model = newManufacturer;
        car.Price = newPrice;
        SaveData();
        Console.WriteLine("Car updated successfully!");
    }


    public void DisplayCars()
    {
        if (!Cars.Any())
        {
            Console.WriteLine("No cars available in this showroom.");
            return;
        }

        foreach (var car in Cars)
        {
            Console.WriteLine($"ID: {car.Id}\nModel: {car.Model}\nManufacturer: {car.Model}\nPrice: {car.Price:C}\n");
        }
    }
}

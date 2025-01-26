using System.Security.Cryptography;

namespace ProjectShowroom;

public class Showroom
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public int CarCapacity { get; set; }
    public List<Car> Cars { get; set; } = new();
    public int SalesCount { get; set; }

    public Showroom() {}
    public Showroom(string name, int carCapacity)
    {
        Name = name;
        CarCapacity = carCapacity;
    }

    public void AddCar(Car car)
    {
        if (Cars.Count >= CarCapacity)
        {
            Console.WriteLine("Cannot add car. Showroom is at full capacity.");
            return;
        }

        Cars.Add(car);
        Console.WriteLine("Car added successfully!");
    }

    public void RemoveCar(Guid carId)
    {
        var car = Cars.FirstOrDefault(c => c.Id == carId);
        if (car == null)
        {
            Console.WriteLine("Car not found.");
            return;
        }

        Cars.Remove(car);
        Console.WriteLine("Car removed successfully!");
    }

    public void EditCar(Guid carId, string newModel, string newManufacturer, decimal newPrice)
    {
        var car = Cars.FirstOrDefault(c => c.Id == carId);
        if (car == null)
        {
            Console.WriteLine("Car not found.");
            return;
        }

        car.Model = newModel;
        car.Manufacturer = newManufacturer;
        car.Price = newPrice;
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
            Console.WriteLine($"ID: {car.Id}\nModel: {car.Model}\nManufacturer: {car.Manufacturer}\nPrice: {car.Price:C}\n");
        }
    }
}

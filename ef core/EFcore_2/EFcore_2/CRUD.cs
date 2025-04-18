using EFcore_2.Data.Contexts;
using EFcore_2.Data.Models;

namespace EFLesson2;
        
public class CRUD
{
    // 11.1: Добавление нового автомобиля
    public void AddCar(int dealerId, string make, string model, int year)
    {
        var context = new ShowroomContext();
        
        var car = new Car
        {
            DealerId = dealerId,
            Make = make,
            Model = model,
            Year = year
        };
        
        context.Cars.Add(car);
        Console.WriteLine($"Adding car: {car.Make} {car.Model} {car.Year}");
        context.SaveChanges();
    }

    // 11.2: Обновление информации
    public void UpdateCar(int CarId, string newMake, string newModel, int newYear)
    {
        var context = new ShowroomContext();
        
        var car = context.Cars.Find(CarId);
        
        Console.Write($"Updating car {car.Make} {car.Model} {car.Year}");
        
        car.Make = newMake;
        car.Model = newModel;
        car.Year = newYear;

        Console.WriteLine($" to {newMake} {newModel} {newYear}");
        context.SaveChanges();
    }

    // 11.3: Удаление автомобиля
    public void DeleteCar(int CarId)
    {
        var context = new ShowroomContext();
        var car = context.Cars.Find(CarId);
        
        context.Cars.Remove(car);
        Console.WriteLine($"Deleting car: {car.Make} {car.Model} {car.Year}");
        context.SaveChanges();
    }

    // 11.4: Получение списка всех машин
    public void GetAllCars()
    {
        var context = new ShowroomContext();
        var cars = context.Cars;

        Console.WriteLine("All Cars:");
        foreach (var car in cars)
        {
            Console.WriteLine($"Make: {car.Make}, Model: {car.Model}, Year: {car.Year}");
        }
        
    }
}



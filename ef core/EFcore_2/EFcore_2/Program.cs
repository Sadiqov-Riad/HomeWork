using EFcore_2;
using EFcore_2.Data.Contexts;
using EFcore_2.Data.Models;
using Microsoft.EntityFrameworkCore;

var context = new ShowroomContext();
var crud = new CRUD();


var dealers = new List<Dealer>()
{
    new() { Name = "Premium Motors", Location = "London" },
    new() { Name = "Elite Cars", Location = "Manchester" },
    new() { Name = "Royal Autos", Location = "Liverpool" }
};

context.Dealers.AddRange(dealers);
context.SaveChanges();

var cars = new List<Car>()
{
    new() { DealerId = 1, Make = "BMW", Model = "X5", Year = 2023 },
    new() { DealerId = 1, Make = "Mercedes", Model = "E-Class", Year = 2022 },
    new() { DealerId = 2, Make = "Audi", Model = "Q7", Year = 2023 },
    new() { DealerId = 2, Make = "Jaguar", Model = "F-Pace", Year = 2022 },
    new() { DealerId = 3, Make = "Range Rover", Model = "Sport", Year = 2023 }
};

context.Cars.AddRange(cars);
context.SaveChanges();

//7. Eager Loading
var result = context.Dealers
    .Include(d => d.Cars)
    .Select(d => new { d.Name, d.Location, Cars = d.Cars.Select(c => new { c.Make, c.Model })
    });

foreach (var res in result)
{
    Console.WriteLine("\n" + res.Name + " " + res.Location);

    foreach (var car in res.Cars)
    {
        Console.WriteLine($"Make: " + car.Make + ", Model: " + car.Model);
    }
}

//8. Explicit Loading
var carMake = context.Cars.First(m => m.Make == "Ford");

context.Entry(carMake)
    .Reference(c => c.Dealer)
    .Load();

Console.WriteLine(carMake.Dealer.Name);


//9. Lazy Loading
var dealerList = context.Dealers.ToList();

foreach (var d in dealerList)
{
    Console.WriteLine($"{d.Name} | {d.Location}");

    foreach (var c in d.Cars)
    {
        Console.WriteLine($"Make: {c.Make}, Model: {c.Model}"); 
    }
}


// 10. Выполнение SQL-запроса в EF Core
var cars = context.Cars
    .FromSqlRaw("SELECT * FROM Cars WHERE Year > 2020");

foreach (var car in cars)
{
    Console.WriteLine($"Make: {car.Make}, Model: {car.Model}, Year: {car.Year}");
}


//Crud operations

crud.AddCar(2, "Toyota", "Prius", 2020);

crud.UpdateCar(3, "Honda", "Civic", 2019);

crud.DeleteCar(2);

crud.GetAllCars();



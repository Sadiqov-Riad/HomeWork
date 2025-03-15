using EFcore_1.Data.Context;
using Microsoft.EntityFrameworkCore;

using var context = new ShowroomContext();


    var customers = new List<Customer>
        {
            new () { FirstName = "Alexander", LastName = "Harris", Phone = "+19121212121", Email = "alexander.harris@mail.com" },
            new () { FirstName = "Sophia", LastName = "Clark", Phone = "+19232323232", Email = "sophia.clark@mail.com" },
            new () { FirstName = "Daniel", LastName = "Lewis", Phone = "+19343434343", Email = "daniel.lewis@mail.com" },
            new () { FirstName = "Isabella", LastName = "Walker", Phone = "+19454545454", Email = "isabella.walker@mail.com" },
            new () { FirstName = "Ethan", LastName = "Hall", Phone = "+19565656565", Email = "ethan.hall@mail.com" },
            new () { FirstName = "Mia", LastName = "Allen", Phone = "+19676767676", Email = "mia.allen@mail.com" },
            new () { FirstName = "Benjamin", LastName = "Young", Phone = "+19787878787", Email = "benjamin.young@mail.com" },
            new () { FirstName = "Charlotte", LastName = "King", Phone = "+19898989898", Email = "charlotte.king@mail.com" },
            new () { FirstName = "Henry", LastName = "Wright", Phone = "+19909090909", Email = "henry.wright@mail.com" },
            new () { FirstName = "Amelia", LastName = "Scott", Phone = "+19010101010", Email = "amelia.scott@mail.com" }
        };

    context.Customers.AddRange(customers);
    context.SaveChanges();


    var cars = new List<Car>
    {
        new () { Brand = "Audi", Model = "A4", Year = 2023, Price = 48000 },
        new () { Brand = "Tesla", Model = "Model 3", Year = 2022, Price = 50000 },
        new () { Brand = "Chevrolet", Model = "Malibu", Year = 2021, Price = 28000 },
        new () { Brand = "Nissan", Model = "Altima", Year = 2023, Price = 27000 },
        new () { Brand = "Hyundai", Model = "Tucson", Year = 2022, Price = 32000 },
        new () { Brand = "Kia", Model = "Sportage", Year = 2023, Price = 31000 },
        new () { Brand = "Volkswagen", Model = "Passat", Year = 2020, Price = 29000 },
        new () { Brand = "Lexus", Model = "RX 350", Year = 2021, Price = 53000 },
        new () { Brand = "Subaru", Model = "Outback", Year = 2023, Price = 34000 },
        new () { Brand = "Mazda", Model = "CX-5", Year = 2022, Price = 33000 }
    };

    context.Cars.AddRange(cars);
    context.SaveChanges();


var employees = new List<Employee>
{
    new Employee { FirstName = "David", LastName = "Harris", Salary = 62000 },
    new Employee { FirstName = "Emma", LastName = "Clark", Salary = 58000 },
    new Employee { FirstName = "Frank", LastName = "Lewis", Salary = 53000 },
    new Employee { FirstName = "Grace", LastName = "Walker", Salary = 59000 },
    new Employee { FirstName = "Henry", LastName = "Allen", Salary = 61000 },
    new Employee { FirstName = "Isabella", LastName = "Wright", Salary = 57000 },
    new Employee { FirstName = "Jack", LastName = "King", Salary = 64000 },
    new Employee { FirstName = "Katherine", LastName = "Scott", Salary = 56000 },
    new Employee { FirstName = "Liam", LastName = "Moore", Salary = 63000 },
    new Employee { FirstName = "Mia", LastName = "Taylor", Salary = 60000 }
};

    context.Employees.AddRange(employees);
    context.SaveChanges();
    

    var sales = new List<Sale>
    {
        new Sale {  CarID = 1, CustomerID = 1, EmployeeID = 1, SaleDate = DateTime.Now},
        new Sale {  CarID = 2, CustomerID = 2, EmployeeID = 2, SaleDate = DateTime.Now},
        new Sale {  CarID = 3, CustomerID = 3, EmployeeID = 1, SaleDate = DateTime.Now},
        new Sale {  CarID = 4, CustomerID = 4, EmployeeID = 3, SaleDate = DateTime.Now},
        new Sale {  CarID = 5, CustomerID = 5, EmployeeID = 2, SaleDate = DateTime.Now}
    };

    context.Sales.AddRange(sales);
    context.SaveChanges();



    Console.WriteLine("Enter Customer Id: ");
    int customerID = int.Parse(Console.ReadLine());

//LINQ1

    var carsPurchased = context.Sales
        .Where(s => s.CustomerID == customerID)
        .Select(s => s.Car)
        .ToList();
    
    foreach (var car in carsPurchased)
    {
        Console.WriteLine($"{car.Id} - {car.Year} - {car.Brand} - {car.Model} - {car.Price}");
    }

//LINQ2

    // var start = new DateTime(2021, 1, 5);
    // var end = new DateTime(2025, 4,9);
    //
    // var result = context.Sales.Where(s => s.SaleDate > start && s.SaleDate < end).ToList();
    //
    // foreach (var res in result)
    // {
    //     Console.WriteLine($"{res.Id} - {res.CustomerID} - {res.EmployeeID} - {res.CarID} - {res.SaleDate}");
    // }
    
//LING 3
    //
    // var result = context.Sales
    //     .Include(s => s.Employee)
    //     .GroupBy(s => s.EmployeeID)
    //     ;
    //     





    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
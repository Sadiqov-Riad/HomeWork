using System.Data;
using Dapper_Lesson_1;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

var connectionString = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build()
    .GetConnectionString("Default");

// Task 1
 //
 // var sqlInsert = "INSERT INTO Cars (Brand, Model, Year, Price) VALUES (@Brand, @Model, @Year, @Price)";
 //
 // var param = new
 // {
 //     Brand = "Toyota",
 //     Model = "Prius",
 //     Year = 2015,
 //     Price = 1999
 // };
 //     
 //
 // using var connection = new SqlConnection(connectionString);
 // using var command = new SqlCommand(sqlInsert, connection);
 //
 // connection.Open();
 //
 // connection.Execute(sqlInsert, param);

//Task2

// var sqlUpdate = "UPDATE Cars SET Price = @NewPrice WHERE Id = @CarId";
//
// var param = new
// {
//     NewPrice = 1200,
//     CarId = 1
// };
//     
//
// using var connection = new SqlConnection(connectionString);
// using var command = new SqlCommand(sqlUpdate, connection);
//
// connection.Open();
//
// connection.Execute(sqlUpdate, param);

//Task 3
// var sqlDelete = "DELETE FROM Cars WHERE Id = @CarId";
//
// var param = new
// {
//     CarId = 1
// };
//     
//
// using var connection = new SqlConnection(connectionString);
// using var command = new SqlCommand(sqlDelete, connection);
//
// connection.Open();
//
// connection.Execute(sqlDelete, param);

//Task 4

// var sqlQuery = "SELECT * FROM Cars";
//
// using var connection = new SqlConnection(connectionString);
// using var command = new SqlCommand(sqlQuery, connection);
//
// connection.Open();
//
// var result = connection.Query<Car>(sqlQuery);
//
// foreach (var car in result)
// {
//     Console.WriteLine(car.Make);
//     Console.WriteLine(car.Model);
//     Console.WriteLine(car.Year);
//     Console.WriteLine(car.Price);
// }

//Task 5

 // var sqlQuery = "SELECT * FROM Cars WHERE Brand = @BrandName";
 //
 // using var connection = new SqlConnection(connectionString);
 // using var command = new SqlCommand(sqlQuery, connection);
 //
 // connection.Open();
 //
 // var result = connection.Query<Car>(sqlQuery, new { BrandName = "Toyota"});
 //
 // foreach (var car in result)
 // {
 //     Console.WriteLine(car.Make);
 //     Console.WriteLine(car.Model);
 //     Console.WriteLine(car.Year);
 //     Console.WriteLine(car.Price);
 // }

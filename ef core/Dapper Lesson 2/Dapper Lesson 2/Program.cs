using System.Data;
using Dapper_Lesson_2;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

var connectionString = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .Build()
    .GetConnectionString("Default");

using var connection = new SqlConnection(connectionString);


// === Вставка данных в таблицу Cars ===
// var sqlInsert = "INSERT INTO Cars (Brand, Model, Year, Price) VALUES (@Brand, @Model, @Year, @Price)";
//
// var param = new
// {
//     Brand = "Toyota",
//     Model = "Prius",
//     Year = 2015,
//     Price = 1993
// };
//     
//

// using var command = new SqlCommand(sqlInsert, connection);
//
// connection.Open();
//
// connection.Execute(sqlInsert, param);


// Выборка данных из таблицы Cars
// var selectCarsQuery = "SELECT * FROM Cars";
// var cars = connection.Query<Cars>(selectCarsQuery);
//
// Console.WriteLine("Список автомобилей:");
// foreach (var car in cars)
// {
//     Console.WriteLine($"{car.Id} - {car.Brand} - {car.Model} - {car.Year} - {car.Price}");
// }

// === Вставка данных в таблицу Owners ===
// var insertOwner = "INSERT INTO Owners (Name, CarId) VALUES (@Name, @CarId)";
//
// var owners = new[]
// {
//     new { Name = "Bob Marley", CarId = 2 },
//     new { Name = "Charlie Chaplin", CarId = 3 }
// };
//
// connection.Execute(insertOwner, owners);

// Выборка данных из таблицы Owners
// var selectOwnersQuery = "SELECT * FROM Owners";
// var owners = connection.Query<Owners>(selectOwnersQuery);
//
// Console.WriteLine("\nСписок владельцев:");
// foreach (var owner in owners)
// {
//     Console.WriteLine($"{owner.Id} - {owner.Name} - {owner.CarId}");
// }

// === Обновление владельца автомобиля по CarId ===
// var updateOwnerQuery = "UPDATE Owners SET Name = @NewOwner WHERE CarId = @CarId";
// var updateParams = new { NewOwner = "Dmitriy", CarId = 2 };
// connection.Execute(updateOwnerQuery, updateParams);
// Console.WriteLine("\nВладелец обновлен.");

// === Удаление автомобиля и его владельца по CarId ===
// var deleteOwnersQuery = "DELETE FROM Owners WHERE CarId = @CarId";
// var deleteCarsQuery = "DELETE FROM Cars WHERE Id = @CarId";
// var deleteParams = new { CarId = 3 };
//
// connection.Execute(deleteOwnersQuery, deleteParams);
// connection.Execute(deleteCarsQuery, deleteParams);
// Console.WriteLine("\nАвтомобиль и его владелец удалены.");

// === Выборка автомобилей с владельцами (INNER JOIN) ===
// var selectCarsWithOwners = @"
//     SELECT c.Id, c.Brand, c.Model, c.Year, c.Price, o.Name AS OwnerName
//     FROM Cars c
//     INNER JOIN Owners o ON c.Id = o.CarId
//     WHERE c.Year >= @MinYear
//     ORDER BY c.Price DESC";
//
// var carsWithOwners = connection.Query<CarWithOwner>(selectCarsWithOwners, new { MinYear = 2014 });
//
// Console.WriteLine("\nСписок автомобилей с владельцами (выпущенные после 2020 года, сортировка по убыванию цены):");
// foreach (var car in carsWithOwners)
// {
//     Console.WriteLine($"{car.Id} - {car.Brand} - {car.Model} - {car.Year} - {car.Price} - {car.OwnerName}");
//     Console.WriteLine("________________________________________________________");
// }


// === Фильтрация автомобилей по владельцу ===
// var filterCarsByOwnerQuery = @"
//     SELECT c.Id, c.Brand, c.Model, c.Year, c.Price
//     FROM Cars c
//     INNER JOIN Owners o ON c.Id = o.CarId
//     WHERE o.Name = @OwnerName";
//
// var filteredCars = connection.Query<Cars>(filterCarsByOwnerQuery, new { OwnerName = "Dmitriy" });
//
// Console.WriteLine("\nАвтомобили владельца Dmitriy:");
// foreach (var car in filteredCars)
// {
//     Console.WriteLine($"{car.Id} - {car.Brand} - {car.Model} - {car.Year} - {car.Price}");
//     Console.WriteLine("________________________________________________________");
// }

// === Транзакция: Добавление автомобиля, владельца и обновление владельца ===
// connection.Open(); // Открываем соединение с базой данных
//
// using var transaction = connection.BeginTransaction(); // Начинаем транзакцию
//
// try
// {
//     // Добавляем новый автомобиль и получаем его идентификатор
//     var insertCarQuery = "INSERT INTO Cars (Brand, Model, Year, Price) VALUES (@Brand, @Model, @Year, @Price); SELECT SCOPE_IDENTITY();";
//     var carId = connection.ExecuteScalar<int>(
//         insertCarQuery,
//         new { Brand = "BMW", Model = "X5", Year = 2022, Price = 60000 },
//         transaction
//     );
//
//     // Добавляем владельца для нового автомобиля
//     var insertOwnerQuery = "INSERT INTO Owners (Name, CarId) VALUES (@Name, @CarId)";
//     connection.Execute(
//         insertOwnerQuery,
//         new { Name = "Alex Johnson", CarId = carId },
//         transaction
//     );
//
//     // Обновляем информацию о владельце
//     var updateOwnerTransactionQuery = "UPDATE Owners SET Name = @NewName WHERE CarId = @CarId";
//     connection.Execute(
//         updateOwnerTransactionQuery,
//         new { NewName = "Alexander Johnson", CarId = carId },
//         transaction
//     );
//
//     // Фиксируем транзакцию
//     transaction.Commit();
//     Console.WriteLine("\nТранзакция успешно выполнена: автомобиль добавлен, владелец обновлен.");
// }
// catch (Exception ex)
// {
//     // Откатываем транзакцию в случае ошибки
//     transaction.Rollback();
//     Console.WriteLine("Ошибка транзакции: " + ex.Message);
// }

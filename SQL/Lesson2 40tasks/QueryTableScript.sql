USE CustomDB

-- 1. Вставить данные о новом клиенте в таблицу `Customers`.
--    СДЕЛАНО В InsertTableScript

-- 2. Обновить email клиента с `CustomerID = 1`.
UPDATE Customers
SET Email = 'JohnDoe@gmail.com'
WHERE CustomerID = 1;

-- 3. Удалить клиента с `CustomerID = 5` из таблицы `Customers`.
DELETE Customers WHERE CustomerID = 5

-- 4. Выбрать все записи из таблицы `Customers`, отсортированные по фамилии (`LastName`).
SELECT * FROM Customers
ORDER BY LastName

-- 5. Вставить несколько новых клиентов в таблицу `Customers`.
--    СДЕЛАНО В InsertTableScript

-- 6. Вставить новый заказ в таблицу `Orders` для клиента с `CustomerID = 1`.
--    СДЕЛАНО В InsertTableScript

-- 7. Обновить `TotalAmount` заказа с `OrderID = 2`.
UPDATE Orders
SET TotalAmount = 120
WHERE OrderID = 2;

-- 8. Удалить заказ с `OrderID = 3` из таблицы `Orders`.
DELETE Orders WHERE OrderID = 3;

-- 9. Выбрать все заказы клиента с `CustomerID = 1`.
SELECT * FROM Orders
WHERE CustomerID = 1;

-- 10. Выбрать все заказы, сделанные в 2023 году.
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 2023;

-- 11. Вставить новый продукт в таблицу `Products`.
--    СДЕЛАНО В InsertTableScript

-- 12. Обновить цену продукта с `ProductID = 2`.
UPDATE Products
SET Price = 650
WHERE ProductID = 2;

-- 13. Удалить продукт с `ProductID = 4` из таблицы `Products`.
DELETE Products WHERE ProductID = 4

-- 14. Выбрать все продукты, цена которых больше 100.
SELECT * FROM Products
WHERE Price > 100;

-- 15. Выбрать все продукты, цена которых меньше или равна 50.
SELECT * FROM Products
WHERE Price <= 50;

-- 16. Вставить данные о товаре в заказ в таблицу `OrderDetails`.
--    СДЕЛАНО В InsertTableScript

-- 17. Обновить количество товара в заказе с `OrderDetailID = 1`.
UPDATE OrderDetails
SET Quantity = 5
WHERE OrderDetailID = 11;

-- 18. Удалить товар из заказа с `OrderDetailID = 2`.
DELETE FROM OrderDetails WHERE OrderDetailID = 2

-- 19. Выбрать все товары из заказа с `OrderID = 1`.
SELECT * FROM OrderDetails
WHERE OrderID = 1

-- 20. Выбрать все заказы, в которых есть продукт с `ProductID = 2`.
SELECT * FROM OrderDetails
WHERE ProductID = 2;

-- ### Простые JOIN
-- 21. Выбрать все заказы с полным именем клиента (использовать INNER JOIN между таблицами `Orders` и `Customers`).
SELECT FirstName + ' ' +LastName AS'Fullname',OrderID  FROM Customers INNER JOIN Orders on Customers.CustomerID = Orders.CustomerID

-- 22. Выбрать все продукты с именем клиента и количеством товаров, используя INNER JOIN между `OrderDetails`, `Orders` и `Customers`.
SELECT Products.ProductName ,Customers.FirstName + ' ' + Customers.LastName AS 'FullName', OrderDetails.Quantity FROM OrderDetails
INNER JOIN Orders on Orders.OrderID = OrderDetails.OrderID
INNER JOIN Customers on Customers.CustomerID = Orders.CustomerID
INNER JOIN Products on OrderDetails.ProductID = Products.ProductID

-- 23. Используя LEFT JOIN, выбрать все заказы и соответствующие данные о клиентах, включая заказы без клиентов.
SELECT * FROM Orders
LEFT JOIN Customers ON Orders.CustomerID = Customers.CustomerID

-- ### Комбинированные JOIN
-- 24. Используя INNER JOIN, вывести все заказы с названиями продуктов.
SELECT Products.ProductName, Orders.OrderID, Orders.CustomerID, Orders.OrderDate, Orders.TotalAmount FROM Orders
INNER JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID



-- 25. Используя LEFT JOIN, вывести всех клиентов и их заказы, включая тех, у кого нет заказов.
SELECT Customers.FirstName + ' ' + LastName AS'FullName',Orders.OrderID  FROM Customers
LEFT JOIN  Orders on Customers.CustomerID = Orders.CustomerID

-- 26. Используя RIGHT JOIN, вывести все продукты и информацию о заказах, в которых они присутствуют.
SELECT ProductName ,OrderID ,OrderDetails.ProductID ,Quantity ,OrderDetails.Price FROM Products
RIGHT JOIN OrderDetails on Products.ProductID = OrderDetails.ProductID

-- 27. Используя INNER JOIN между таблицами `Products`, `OrderDetails` и `Orders`, вывести все заказы с названиями продуктов.
SELECT ProductName FROM Products
INNER JOIN dbo.OrderDetails OD on Products.ProductID = OD.ProductID
INNER JOIN dbo.Orders O on OD.OrderID = O.OrderID

-- 28. Используя INNER JOIN между таблицами `Customers`, `Orders` и `OrderDetails`, вывести имена клиентов и их заказы с указанием стоимости каждого товара.
SELECT Customers.CustomerID, Customers.FirstName + ' ' +Customers.LastName AS 'FullName', Orders.OrderID, Orders.TotalAmount  FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
INNER JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID


-- ### Подзапросы и JOIN
-- 29. Используя подзапрос в SELECT, вывести имена клиентов, которые сделали заказ на сумму больше 500.
SELECT FirstName + ' ' + LastName AS 'FullName'
FROM Customers
WHERE CustomerID IN (
    SELECT CustomerID FROM Orders WHERE TotalAmount > 500
);

-- 30. Используя подзапрос в WHERE, вывести все продукты, которые были заказаны более 10 раз.(я сделал более 5 раз)
SELECT ProductName
FROM Products
WHERE ProductID IN (
    SELECT ProductID FROM OrderDetails GROUP BY ProductID HAVING SUM(Quantity) > 5
);

-- 31. Используя подзапрос в SELECT, вывести общую сумму всех заказов для каждого клиента.
SELECT Customers.FirstName, Customers.LastName,
       (SELECT SUM(TotalAmount) FROM Orders  WHERE Orders.CustomerID = Customers.CustomerID ) AS TotalSpent
FROM Customers
WHERE (SELECT SUM(TotalAmount) FROM Orders WHERE Customers.CustomerID = Orders.CustomerID) IS NOT NULL;

-- 32. Используя подзапрос в SELECT, вывести все продукты, стоимость которых больше средней стоимости всех продуктов.
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);

-- ### Многоступенчатые JOIN
-- 33. Используя несколько JOIN, вывести все заказы с подробной информацией о клиентах и продуктах.
SELECT Orders.OrderID, Customers.FirstName, Customers.LastName, p.ProductName, OrderDetails.Quantity, OrderDetails.Price
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
JOIN OrderDetails  ON Orders.OrderID = OrderDetails.OrderID
JOIN Products p ON OrderDetails.ProductID = p.ProductID;

-- 34. Написать запрос с использованием нескольких JOIN, чтобы вывести список клиентов, их заказов и продуктов, которые они заказали, с количеством и ценой.
SELECT Customers.CustomerID, Customers.FirstName, Customers.LastName, Orders.OrderID, p.ProductName, OrderDetails.Quantity, OrderDetails.Price
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
JOIN Products p ON OrderDetails.ProductID = p.ProductID;

-- 35. Используя несколько JOIN, вывести список всех клиентов и продуктов, которые они купили, а также суммарную стоимость товаров в каждом заказе.
SELECT
    Customers.CustomerID,
    Customers.FirstName,
    Customers.LastName,
    Products.ProductName,
    OrderDetails.Quantity,
    OrderDetails.Quantity * Products.Price AS TotalCost
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
INNER JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
INNER JOIN Products ON Products.ProductID = OrderDetails.ProductID

-- ## 6. Дополнительные задания:
-- 36. Выбрать все заказы с количеством товаров, общая стоимость которых превышает 1000.(под себя переделал на 3300)
SELECT Orders.OrderID, SUM(OrderDetails.Quantity * OrderDetails.Price) AS OrderTotal
FROM Orders
INNER JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
GROUP BY Orders.OrderID
HAVING SUM(OrderDetails.Quantity * OrderDetails.Price) > 3300;

-- 37. Выбрать клиентов, у которых заказы превышают среднюю сумму всех заказов.
SELECT Customers.CustomerID, Customers.FirstName, Customers.LastName
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerID, Customers.FirstName, Customers.LastName
HAVING AVG(Orders.TotalAmount) > (SELECT AVG(TotalAmount) FROM Orders);

-- 38. Написать запрос с использованием GROUP BY для подсчета количества заказов каждого клиента.
SELECT Customers.FirstName, Customers.CustomerID, COUNT(Orders.OrderID) AS OrderCount
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerID, Customers.FirstName;

-- 39. Написать запрос с использованием HAVING для подсчета общего числа товаров, заказанных более чем 3 раза.
SELECT ProductID, SUM(Quantity) AS TotalQuantity
FROM OrderDetails
GROUP BY ProductID
HAVING SUM(Quantity) > 3;

-- 40. Выбрать клиентов и количество заказанных товаров для каждого заказа с использованием GROUP BY и JOIN.
SELECT Customers.CustomerID, Customers.FirstName, Customers.LastName, Orders.OrderID, SUM(OrderDetails.Quantity) AS TotalProducts
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
JOIN OrderDetails ON Orders.OrderID = OrderDetails.OrderID
GROUP BY Customers.CustomerID, Customers.FirstName, Customers.LastName, Orders.OrderID;

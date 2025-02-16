USE CustomDB

INSERT INTO Customers (FirstName, LastName, Email) VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Smith', 'jane.smith@example.com'),
('Michael', 'Johnson', 'michael.j@example.com');

INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES
(1, '2023-05-10', 250.00),
(2, '2023-06-15', 400.00),
(3,'2022-06-11',650);

INSERT INTO Products (ProductName, Price) VALUES
('Laptop', 1000.00),
('Mouse', 50.00),
('Keyboard', 70.00);

INSERT INTO OrderDetails ( OrderID, ProductID, Quantity, Price) VALUES
(1, 1, 1, 1000.00),
(1, 2, 2, 100.00),
(2, 3, 1, 70.00);

INSERT INTO Customers (FirstName, LastName, Email) VALUES ('Alice', 'Green', 'alice.green@example.com');

INSERT INTO Customers (FirstName, LastName, Email) VALUES
('Emma', 'White', 'emma.white@example.com'),
('Liam', 'Brown', 'liam.brown@example.com');

INSERT INTO Orders (CustomerID, OrderDate, TotalAmount) VALUES (1, '2024-01-10', 150.00);

INSERT INTO Products (ProductName, Price) VALUES ('Monitor', 200.00);

INSERT INTO OrderDetails (OrderID, ProductID, Quantity, Price) VALUES (2, 1, 1, 1000.00);

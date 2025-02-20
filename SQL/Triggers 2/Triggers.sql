USE CarDealership

-- 1 Создайте триггер, который при изменении цены автомобиля добавляет запись в таблицу CarPriceHistory.
CREATE TRIGGER UpdateCarPrice ON Cars
AFTER UPDATE
AS
BEGIN
    IF UPDATE(Price)
    BEGIN
        INSERT INTO CarPriceHistory (CarId, OldPrice, NewPrice, ChangeDate)
        SELECT deleted.Id, deleted.Price, inserted.Price, GETDATE()
        FROM deleted
        JOIN inserted ON deleted.Id = inserted.Id;
    END
END;

-- Проверка
UPDATE Cars
SET Price = 64000
WHERE Id = 2

-- 2 Запретите удаление клиентов, у которых есть активные заказы.
CREATE TRIGGER BlockCustomerDelete ON Customers
INSTEAD OF DELETE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Orders WHERE CustomerId IN (SELECT Id FROM deleted))
    BEGIN
        print ('Unable to delete a customer! He has an active order!');
        RETURN;
    END
    DELETE FROM Customers WHERE Id IN (SELECT Id FROM deleted);
END;

-- Проверка
DELETE FROM Customers
WHERE Id = 1

-- 3 При удалении заказа сохраните его данные в DeletedOrdersLog.
CREATE TRIGGER LoggingDeletedOrders ON Orders
AFTER DELETE
AS
BEGIN
    INSERT INTO DeletedOrdersLog (OrderId, CustomerId, CarId, OrderDate, DeletedAt)
    SELECT Id, CustomerId, CarId, OrderDate, GETDATE()
    FROM deleted;
END;

-- Проверка
DELETE FROM Orders
WHERE Id = 1

-- 4 Если изменяется год выпуска автомобиля, автоматически снижайте цену на 5%.
CREATE TRIGGER UpdatePrice ON Cars
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    IF UPDATE(Year)
    BEGIN
        UPDATE Cars
        SET Cars.Price = Cars.Price * 0.95
        FROM Cars
        JOIN inserted ON Cars.Id = inserted.Id
        JOIN deleted ON deleted.Id = inserted.Id
        WHERE inserted.Year <> deleted.Year;
    END
END;

-- Проверка
UPDATE Cars
SET Year = 2022
WHERE Id = 2

-- 5 Запретите клиенту оформлять заказ на один и тот же автомобиль более одного раза
CREATE TRIGGER NoOrderDuplication ON Orders
INSTEAD OF INSERT
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM Orders o
        JOIN inserted i ON o.CustomerId = i.CustomerId AND o.CarId = i.CarId
    )
    BEGIN
        print('Customer already ordered this car!');
        RETURN;
    END
    INSERT INTO Orders (CustomerId, CarId, OrderDate)
    SELECT CustomerId, CarId, OrderDate FROM inserted;
END;

--Проверка
INSERT INTO Orders(CustomerId, CarId)
VALUES (1, 1)
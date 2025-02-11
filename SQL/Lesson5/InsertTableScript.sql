USE Academy;

INSERT INTO Departments (Financing, Name)
VALUES (10000, 'Software Development'),
       (27000, 'Artificial Intelligence'),
       (5000, 'Mathematics'),
       (12000, 'Cybersecurity');


INSERT INTO Faculties (Dean, Name)
VALUES ('John Smith', 'Computer Science'),
       ('Emma Johnson', 'Physics'),
       ('Michael Brown', 'Mathematics'),
       ('Olivia Davis', 'Biotechnology');


INSERT INTO Groups (Name, Rating, Year)
VALUES ('CS101', 4, 1),
       ('CS202', 3, 5),
       ('PHY303', 2, 5),
       ('BIO404', 5, 4),
       ('MATH505', 1, 3);


INSERT INTO Teachers (Name, Surname, IsAssistant, IsProfessor, Position, Premium, Salary, EmploymentDate)
VALUES (N'Alice', N'Johnson', 1, 0, 'Assistant Professor', 300, 1000, '1995-06-12'),
       (N'Bob', N'Williams', 0, 1, 'Professor', 500, 1500, '1998-02-22'),
       (N'Charlie', N'Brown', 0, 1, 'Professor', 600, 2000, '1991-08-01'),
       (N'David', N'Clark', 1, 0, 'Assistant Professor', 200, 900, '2001-05-10'),
       (N'Eve', N'Taylor', 0, 0, 'Senior Lecturer', 700, 1100, '1999-12-31'),
       (N'Frank', N'Harris', 1, 0, 'Assistant Professor', 550, 800, '1997-04-15'),
       (N'Grace', N'Martinez', 1, 0, 'Assistant Professor', 160, 750, '2003-11-11');


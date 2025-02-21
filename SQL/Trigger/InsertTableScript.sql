USE Academy

INSERT INTO Students (FirstName, LastName, AvgGrade)
VALUES
('John', 'Smith', 4.5),
('Peter', 'Johnson', 3.2),
('Mary', 'Williams', 4.0),
('Anna', 'Brown', 2.5),
('Alex', 'Davis', 4.7),
('Olivia', 'Miller', 5.0),
('James', 'Wilson', 3.8),
('Emily', 'Taylor', 3.0);

INSERT INTO Groups (GroupName, StudentsCount)
VALUES
('Group A', 7),
('Group B', 6);

INSERT INTO Courses (CourseName)
VALUES
('Introduction to Programming'),
('Algorithms and Data Structures'),
('Mathematics for Programmers'),
('Databases');

INSERT INTO StudentGroups (StudentId, GroupId)
VALUES
(1, 1), (2, 1), (3, 1), (4, 1), (5, 1), (6, 1), (7, 2),
(8, 2);

INSERT INTO StudentCourses (StudentId, CourseId)
VALUES
(1, 1), (1, 2), (1, 3), (2, 1), (2, 4), (3, 1),
(3, 2), (4, 3), (5, 2), (6, 1), (6, 4), (7, 3),
(8, 1);

INSERT INTO Grades (StudentId, CourseId, Grade)
VALUES
(1, 1, 5.0), (1, 2, 4.5), (1, 3, 4.8), (2, 1, 3.0),
(2, 4, 2.5), (3, 1, 4.0), (3, 2, 4.2), (4, 3, 3.0),
(5, 2, 5.0), (6, 1, 4.9), (6, 4, 4.7), (7, 3, 3.5),
(8, 1, 3.5);

INSERT INTO Warnings (StudentId, Reason, Date)
VALUES
(2, 'Low Grade', CONVERT(DATETIME, '2025-02-15', 120)),
(4, 'Low Grade', CONVERT(DATETIME, '2025-02-15', 120));

INSERT INTO Teachers (FirstName, LastName)
VALUES
('Michael', 'Anderson'),
('Olivia', 'Roberts');

INSERT INTO TeacherCourses (TeacherId, CourseId)
VALUES
(1, 1), (1, 2), (2, 3), (2, 4);

INSERT INTO Attendance (StudentId, Date)
VALUES
(1, '2025-02-01'), (1, '2025-02-02'), (2, '2025-02-01'),
(3, '2025-02-03'), (4, '2025-02-04'), (5, '2025-02-02');

INSERT INTO Payments (StudentId, Amount, Date)
VALUES
(1, 5000.00, CONVERT(DATETIME, '2025-01-15', 120)),
(2, 4500.00, CONVERT(DATETIME, '2025-01-15', 120)),
(3, 6000.00, CONVERT(DATETIME, '2025-01-16', 120)),
(4, 7000.00, CONVERT(DATETIME, '2025-01-20', 120));

INSERT INTO RetakeList (StudentId, CourseId)
VALUES
(2, 1), (4, 3);

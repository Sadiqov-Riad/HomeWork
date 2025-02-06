
USE Academy

INSERT INTO Faculties (Financing, Name) VALUES
(100000, 'Computer Science'),
(80000, 'Mathematics'),
(120000, 'Physics');

INSERT INTO Departments (Financing, Name, FacultyId) VALUES
(50000, 'Software Engineering', 1),
(30000, 'Pure Mathematics', 2),
(70000, 'Quantum Physics', 3);

INSERT INTO Curators (Name, Surname) VALUES
(N'John', N'Doe'),
(N'Anna', N'Smith'),
(N'Michael', N'Brown');

INSERT INTO Groups (Name, Year, DepartmentId) VALUES
(N'P107', 3, 1),
(N'M301', 2, 2),
(N'Q501', 5, 3);

INSERT INTO GroupsCurators (CuratorId, GroupId) VALUES
(1, 1),
(2, 2),
(3, 3);

INSERT INTO Teachers (Name, Surname, Salary) VALUES
(N'Samantha', N'Adams', 5000),
(N'Robert', N'White', 6000),
(N'Emily', N'Johnson', 5500);

INSERT INTO Subjects (Name) VALUES
(N'Database Theory'),
(N'Calculus'),
(N'Quantum Mechanics');

INSERT INTO Lectures (LectureRoom, SubjectId, TeacherId) VALUES
(N'B103', 1, 1),
(N'A201', 2, 2),
(N'C302', 3, 3);

INSERT INTO GroupsLectures (GroupId, LectureId) VALUES
(1, 1),
(2, 2),
(3, 3);

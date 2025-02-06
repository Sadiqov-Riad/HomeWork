
USE Academy

SELECT T.Name AS TeacherName, T.Surname AS TeacherSurname, G.Name AS GroupName
FROM Teachers T
CROSS JOIN Groups G;

SELECT F.Name AS FacultyName
FROM Faculties F
JOIN Departments D ON F.Id = D.FacultyId
GROUP BY F.Id, F.Name, F.Financing
HAVING SUM(D.Financing) > F.Financing;

SELECT C.Surname AS CuratorSurname, G.Name AS GroupName
FROM GroupsCurators GC
JOIN Curators C ON GC.CuratorId = C.Id
JOIN Groups G ON GC.GroupId = G.Id;

SELECT T.Name AS TeacherName, T.Surname AS TeacherSurname
FROM Groups G
JOIN GroupsLectures GL ON G.Id = GL.GroupId
JOIN Lectures L ON GL.LectureId = L.Id
JOIN Teachers T ON L.TeacherId = T.Id
WHERE G.Name = N'P107';

SELECT T.Surname AS TeacherSurname, F.Name AS FacultyName
FROM Teachers T
JOIN Lectures L ON T.Id = L.TeacherId
JOIN GroupsLectures GL ON L.Id = GL.LectureId
JOIN Groups G ON GL.GroupId = G.Id
JOIN Departments D ON G.DepartmentId = D.Id
JOIN Faculties F ON D.FacultyId = F.Id;

SELECT D.Name AS DepartmentName, G.Name AS GroupName
FROM Departments D
JOIN Groups G ON D.Id = G.DepartmentId;

SELECT S.Name AS SubjectName
FROM Teachers T
JOIN Lectures L ON T.Id = L.TeacherId
JOIN Subjects S ON L.SubjectId = S.Id
WHERE T.Name = N'Samantha' AND T.Surname = N'Adams';

SELECT DISTINCT D.Name AS DepartmentName
FROM Subjects S
JOIN Lectures L ON S.Id = L.SubjectId
JOIN GroupsLectures GL ON L.Id = GL.LectureId
JOIN Groups G ON GL.GroupId = G.Id
JOIN Departments D ON G.DepartmentId = D.Id
WHERE S.Name = N'Database Theory';

SELECT G.Name AS GroupName
FROM Faculties F
JOIN Departments D ON F.Id = D.FacultyId
JOIN Groups G ON D.Id = G.DepartmentId
WHERE F.Name = N'Computer Science';

SELECT G.Name AS GroupName, F.Name AS FacultyName
FROM Groups G
JOIN Departments D ON G.DepartmentId = D.Id
JOIN Faculties F ON D.FacultyId = F.Id
WHERE G.Year = 5;

SELECT T.Name AS TeacherName, T.Surname AS TeacherSurname, S.Name AS SubjectName, G.Name AS GroupName
FROM Lectures L
JOIN Teachers T ON L.TeacherId = T.Id
JOIN Subjects S ON L.SubjectId = S.Id
JOIN GroupsLectures GL ON L.Id = GL.LectureId
JOIN Groups G ON GL.GroupId = G.Id
WHERE L.LectureRoom = N'B103';

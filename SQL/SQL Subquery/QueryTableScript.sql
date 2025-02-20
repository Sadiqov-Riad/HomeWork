USE Academy

-- 1. Вывести номера корпусов, если суммарный фонд финансирования расположенных в них кафедр превышает 100000.
SELECT Building
FROM Departments
GROUP BY Building
HAVING SUM(Financing) > 100000;

-- 2. Вывести названия групп 5-го курса кафедры “Software Engineering”, которые имеют более 10 пар в первую неделю.
SELECT
Groups.Name
FROM Groups
JOIN Departments ON Departments.Id = Groups.DepartmentId
JOIN GroupsLectures ON Groups.Id = GroupsLectures.GroupId
WHERE Departments.Name = 'Software Engineering' AND Groups.Year = 5
AND GroupsLectures.LectureId IN (SELECT Id FROM Lectures WHERE Date BETWEEN '2024-02-01' AND '2026-02-07')
GROUP BY Groups.Name
HAVING COUNT(GroupsLectures.LectureId) > 1;

-- 3. Вывести названия групп, имеющих рейтинг (средний рейтинг всех студентов группы) больше, чем рейтинг группы “D221”.
SELECT
Groups.Name FROM Groups
JOIN GroupsStudents ON Groups.Id = GroupsStudents.GroupId
JOIN Students ON Students.Id = GroupsStudents.StudentId
GROUP BY Groups.Name
HAVING AVG(Students.Rating) > (SELECT AVG(Students.Rating) FROM Groups
JOIN GroupsStudents ON Groups.Id = GroupsStudents.GroupId
JOIN Students ON Students.Id = GroupsStudents.StudentId
WHERE Groups.Name = 'D221'
);

-- 4. Вывести фамилии и имена преподавателей, ставка которых выше средней ставки профессоров.
SELECT Name, Surname FROM Teachers
WHERE Salary > (SELECT AVG(Salary) FROM Teachers WHERE IsProfessor = 1
);

-- 5. Вывести названия групп, у которых больше одного куратора.
SELECT Groups.Name FROM Groups
WHERE Id IN (
    SELECT GroupId FROM GroupsCurators
    GROUP BY GroupId
    HAVING COUNT(CuratorId) > 1
)

-- 6. Вывести названия групп, имеющих рейтинг (средний рейтинг всех студентов группы) меньше, чем минимальный рейтинг групп 5-го курса.
SELECT Groups.Name FROM Groups
JOIN GroupsStudents ON Groups.Id = GroupsStudents.GroupId
JOIN Students ON Students.Id = GroupsStudents.StudentId
GROUP BY Groups.Name
HAVING AVG(Students.Rating) > (SELECT MIN(Students.Rating) FROM Groups
JOIN GroupsStudents ON Groups.Id = GroupsStudents.GroupId
JOIN Students ON Students.Id = GroupsStudents.StudentId
WHERE Groups.Year = 5);

-- 7. Вывести названия факультетов, суммарный фонд финансирования кафедр которых больше суммарного фонда финансирования кафедр факультета “Computer Science”.
SELECT Faculties.Name FROM Faculties
JOIN Departments ON Faculties.Id = Departments.FacultyId
GROUP BY Faculties.Name
HAVING SUM(Departments.Financing) > (SELECT SUM(Departments.Financing) FROM Departments
    JOIN Faculties ON Faculties.Id = Departments.FacultyId
    WHERE Faculties.Name = 'Computer Science');

-- 8. Вывести названия дисциплин и полные имена преподавателей, читающих наибольшее количество лекций по ним.
SELECT Subjects.Name, Teachers.Name, Teachers.Surname FROM Subjects
JOIN Lectures ON Subjects.Id = Lectures.SubjectId
JOIN Teachers ON Teachers.Id = Lectures.TeacherId
GROUP BY Subjects.Name, Teachers.Name, Teachers.Surname
HAVING COUNT(Lectures.Id) = (SELECT MAX(Count) FROM (SELECT COUNT(Lectures.Id) AS Count FROM Lectures
GROUP BY Lectures.SubjectId, Lectures.TeacherId) AS MaxLectures);

-- 9. Вывести название дисциплины, по которому читается меньше всего лекций.
SELECT TOP 1 Subjects.Name FROM Subjects
JOIN Lectures ON Subjects.Id = Lectures.SubjectId
GROUP BY Subjects.Name
ORDER BY COUNT(Lectures.Id) ASC;

-- 10. Вывести количество студентов и читаемых дисциплин на кафедре “Software Engineering”.
SELECT
    (SELECT COUNT(Students.Id)
     FROM Students
     JOIN GroupsStudents ON Students.Id = GroupsStudents.StudentId
     JOIN Groups ON GroupsStudents.GroupId = Groups.Id
     JOIN Departments ON Groups.DepartmentId = Departments.Id
     WHERE Departments.Name = 'Software Engineering') AS StudentCount,
    (SELECT COUNT(DISTINCT l.SubjectId)
     FROM Lectures l
     JOIN GroupsLectures gl ON l.Id = gl.LectureId
     JOIN Groups g ON gl.GroupId = g.Id
     JOIN Departments d ON g.DepartmentId = d.Id
     WHERE d.Name = 'Software Engineering') AS SubjectCount;
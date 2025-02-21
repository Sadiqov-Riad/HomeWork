USE Academy

-- 1. Ограничение количества студентов в группе
-- Создайте триггер, который запрещает добавление нового студента в группу, если в ней уже 30 человек.

CREATE TRIGGER LimitGroup ON StudentGroups
AFTER INSERT
AS
BEGIN
    IF (SELECT COUNT(*) FROM StudentGroups WHERE GroupId IN (SELECT GroupId FROM inserted)) > 30
    BEGIN
        PRINT 'Cannot add more than 30 students to a group.';
        ROLLBACK TRANSACTION;
    END
END;

-- 2. Обновление количества студентов в группе
-- Напишите триггер, который автоматически обновляет поле StudentsCount в таблице Group при добавлении или удалении студента.

CREATE TRIGGER UpdateStudentCount ON StudentGroups
AFTER INSERT, DELETE
AS
BEGIN
    UPDATE Groups
    SET StudentsCount = (SELECT COUNT(*) FROM StudentGroups WHERE GroupId = Groups.GroupId);
END;

-- 3. Автоматическая регистрация студента на общий курс
-- Создайте триггер, который при добавлении нового студента автоматически добавляет его в курс "Введение в программирование" (если такой курс существует).

CREATE TRIGGER AutoCourseAdding ON Students
AFTER INSERT
AS
BEGIN
    INSERT INTO StudentCourses (StudentId, CourseId)
    SELECT i.StudentId, c.CourseId
    FROM inserted i, Courses c
    WHERE c.CourseName = 'Introduction to Programming';
END;

-- 4. Предупреждение о низкой оценке
-- Реализуйте триггер, который при вставке или обновлении оценки в таблице Grade проверяет, если оценка ниже 3, то добавляет запись в таблицу Warnings (StudentId, Reason, Date).

CREATE TRIGGER LowGradeWarning
ON Grades
AFTER INSERT, UPDATE
AS
BEGIN
    INSERT INTO Warnings (StudentId, Reason, Date)
    SELECT i.StudentId, 'Low grade', GETDATE()
    FROM inserted i
    WHERE i.Grade < 3;
END;
-- 5. Запрет удаления учителей с курсами
-- Создайте триггер, который запрещает удаление преподавателя, если за ним закреплены активные курсы.

CREATE TRIGGER BlockTeacherDeleting
ON Teachers
INSTEAD OF DELETE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM TeacherCourses WHERE TeacherId IN (SELECT TeacherId FROM deleted))
    BEGIN
        PRINT 'Cannot delete a teacher with assigned courses.';
    END
    ELSE
    BEGIN
        DELETE FROM Teachers WHERE TeacherId IN (SELECT TeacherId FROM deleted);
    END
END;

-- 6. История изменений оценок
-- Разработайте триггер, который при обновлении таблицы Grade сохраняет старое значение в таблице GradeHistory с указанием времени изменения.

CREATE TRIGGER GradeHistory
ON Grades
AFTER UPDATE
AS
BEGIN
    INSERT INTO GradeHistory (StudentId, CourseId, Grade, ChangeDate)
    SELECT d.StudentId, d.CourseId, d.Grade, GETDATE()
    FROM deleted d;
END;

-- 7. Контроль пропусков занятий
-- Создайте триггер, который при добавлении записи о пропуске занятия (Attendance) проверяет, если студент пропустил более 5 занятий подряд, то добавляет его в список на пересдачу (RetakeList).

CREATE TRIGGER AttendanceControl
ON Attendance
AFTER INSERT
AS
BEGIN
    INSERT INTO RetakeList (StudentId, CourseId)
    SELECT i.StudentId, c.CourseId
    FROM inserted i
    JOIN StudentCourses sc ON i.StudentId = sc.StudentId
    JOIN Courses c ON sc.CourseId = c.CourseId
    WHERE (SELECT COUNT(*) FROM Attendance WHERE StudentId = i.StudentId AND Date >= DATEADD(DAY, -5, GETDATE())) > 5;
END;

-- 8. Запрет удаления студентов с долгами
-- Напишите триггер, который запрещает удаление студента, если у него есть задолженности по оплате (Payments) или неудовлетворительные оценки.

    CREATE TRIGGER PreventStudentDeletion
ON Students
INSTEAD OF DELETE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM Payments WHERE StudentId IN (SELECT StudentId FROM deleted) AND Amount > 0)
        OR EXISTS (SELECT 1 FROM Grades WHERE StudentId IN (SELECT StudentId FROM deleted) AND Grade < 3)
    BEGIN
        PRINT 'Cannot delete a student with debts or low grades.';
    END
    ELSE
    BEGIN
        DELETE FROM Students WHERE StudentId IN (SELECT StudentId FROM deleted);
    END
END;

-- 9. Обновление среднего балла студента
-- Создайте триггер, который при добавлении или изменении оценки пересчитывает средний балл студента в таблице Student.

CREATE TRIGGER UpdateGPA
ON Grades
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    UPDATE Students
    SET AvgGrade = (SELECT AVG(Grade) FROM Grades WHERE StudentId = Students.StudentId);
END;
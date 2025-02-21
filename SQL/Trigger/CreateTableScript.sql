CREATE DATABASE Academy;

USE Academy;

CREATE TABLE Students (
    [StudentId] int PRIMARY KEY identity(1,1),
    [FirstName] nvarchar(50),
    [LastName] nvarchar(50),
    [AvgGrade] DECIMAL(3,2)
);

CREATE TABLE Groups (
    [GroupId] int PRIMARY KEY identity(1,1),
    [GroupName] nvarchar(50),
    [StudentsCount] int
);

CREATE TABLE Courses (
    [CourseId]int PRIMARY KEY identity(1,1),
    [CourseName] nvarchar(100)
);

CREATE TABLE StudentGroups (
    [StudentId] int,
    [GroupId] int,
    PRIMARY KEY (StudentId, GroupId),
    FOREIGN KEY (StudentId) references Students(StudentId),
    FOREIGN KEY (GroupId) references Groups(GroupId)
);

CREATE TABLE StudentCourses (
    [StudentId] int,
    [CourseId] int,
    PRIMARY KEY (StudentId, CourseId),
    FOREIGN KEY (StudentId) references Students(StudentId),
    FOREIGN KEY (CourseId) references Courses(CourseId)
);

CREATE TABLE Grades (
    [GradeId] int PRIMARY KEY identity(1,1),
    [StudentId] int,
    [CourseId] int,
    [Grade] DECIMAL(3,2),
    FOREIGN KEY (StudentId) references Students(StudentId),
    FOREIGN KEY (CourseId) references Courses(CourseId)
);

CREATE TABLE Warnings (
    [WarningId] int PRIMARY KEY identity(1,1),
    [StudentId] int,
    [Reason] nvarchar(255),
    [Date]DATETIME,
    FOREIGN KEY (StudentId) references Students(StudentId)
);

CREATE TABLE Teachers (
    [TeacherId] int PRIMARY KEY identity(1,1),
    [FirstName] nvarchar(50),
    [LastName] nvarchar(50)
);

CREATE TABLE TeacherCourses (
    [TeacherId] int,
    [CourseId] int,
    PRIMARY KEY (TeacherId, CourseId),
    FOREIGN KEY (TeacherId) references Teachers(TeacherId),
    FOREIGN KEY (CourseId) references Courses(CourseId)
);

CREATE TABLE Attendance (
    [AttendanceId] int PRIMARY KEY identity(1,1),
    [StudentId] int,
    [Date] DATETIME,
    FOREIGN KEY (StudentId) references Students(StudentId)
);

CREATE TABLE RetakeList (
    [StudentId] int,
    [CourseId] int,
    FOREIGN KEY (StudentId) references Students(StudentId),
    FOREIGN KEY (CourseId) references Courses(CourseId)
);

CREATE TABLE Payments (
    [PaymentId] int PRIMARY KEY identity(1,1),
    [StudentId] int,
    [Amount] DECIMAL(10,2),
    Date DATETIME,
    FOREIGN KEY (StudentId) references Students(StudentId)
);


CREATE TABLE GradeHistory (
    [HistoryId] int identity(1,1) PRIMARY KEY,
    [StudentId] int,
    [CourseId] int,
    [Grade] DECIMAL(3,2),
    [ChangeDate] DATETIME
);

CREATE DATABASE Academy

USE Academy

CREATE TABLE Curators (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(MAX) NOT NULL CHECK (Name <> N''),
    Surname NVARCHAR(MAX) NOT NULL CHECK (Surname <> N'')
);

CREATE TABLE Departments (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Financing MONEY NOT NULL CHECK (Financing >= 0) DEFAULT 0,
    Name NVARCHAR(100) NOT NULL UNIQUE CHECK (Name <> N''),
    FacultyId INT NOT NULL,
    FOREIGN KEY (FacultyId) REFERENCES Faculties(Id)
);

CREATE TABLE Faculties (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Financing MONEY NOT NULL CHECK (Financing >= 0) DEFAULT 0,
    Name NVARCHAR(100) NOT NULL UNIQUE CHECK (Name <> N'')
);

CREATE TABLE Groups (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(10) NOT NULL UNIQUE CHECK (Name <> N''),
    Year INT NOT NULL CHECK (Year BETWEEN 1 AND 5),
    DepartmentId INT NOT NULL,
    FOREIGN KEY (DepartmentId) REFERENCES Departments(Id)
);

CREATE TABLE GroupsCurators (
    Id INT PRIMARY KEY IDENTITY(1,1),
    CuratorId INT NOT NULL,
    GroupId INT NOT NULL,
    FOREIGN KEY (CuratorId) REFERENCES Curators(Id),
    FOREIGN KEY (GroupId) REFERENCES Groups(Id)
);

CREATE TABLE GroupsLectures (
    Id INT PRIMARY KEY IDENTITY(1,1),
    GroupId INT NOT NULL,
    LectureId INT NOT NULL,
    FOREIGN KEY (GroupId) REFERENCES Groups(Id),
    FOREIGN KEY (LectureId) REFERENCES Lectures(Id)
);

CREATE TABLE Lectures (
    Id INT PRIMARY KEY IDENTITY(1,1),
    LectureRoom NVARCHAR(MAX) NOT NULL CHECK (LectureRoom <> N''),
    SubjectId INT NOT NULL,
    TeacherId INT NOT NULL,
    FOREIGN KEY (SubjectId) REFERENCES Subjects(Id),
    FOREIGN KEY (TeacherId) REFERENCES Teachers(Id)
);

CREATE TABLE Subjects (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL UNIQUE CHECK (Name <> N'')
);

CREATE TABLE Teachers (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(MAX) NOT NULL CHECK (Name <> N''),
    Surname NVARCHAR(MAX) NOT NULL CHECK (Surname <> N''),
    Salary MONEY NOT NULL CHECK (Salary > 0)
);

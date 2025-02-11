CREATE DATABASE Academy

USE Academy

CREATE TABLE Departments
(
    [ID] int identity (1,1) NOT NULL PRIMARY KEY ,
    [Financing] money NOT NULL CHECK ( [Financing] >= 0) DEFAULT 0,
    [Name] nvarchar(100) NOT NULL UNIQUE CHECK ([Name] <> '')
)

CREATE TABLE Faculties
(
    [ID] int identity (1,1) NOT NULL PRIMARY KEY ,
    [Dean] nvarchar(max) NOT NULL CHECK ([Dean] <> ''),
    [Name] nvarchar(100) NOT NULL UNIQUE CHECK ([Name] <> '')
)

CREATE TABLE Groups
(
    [ID] int identity (1,1) NOT NULL PRIMARY KEY ,
    [Name] nvarchar(10) NOT NULL UNIQUE CHECK ([Name] <> ''),
    [Rating] int NOT NULL CHECK ( 0 <= [Rating] and [Rating] <= 5),
    [Year] int NOT NULL CHECK ( 1 <= [Year] and [Year] <= 5)
)

CREATE TABLE Teachers
(
    [ID] int identity (1,1) NOT NULL PRIMARY KEY ,
    [Name] nvarchar(max) NOT NULL  CHECK ([Name] <> ''),
    [Surname] nvarchar(max) NOT NULL  CHECK ([Surname] <> ''),
    [IsAssistant] bit NOT NULL DEFAULT 0,
    [IsProfessor] bit NOT NULL DEFAULT 0,
    [Position] NVARCHAR (max) NOT NULL CHECK ([Position] <> ''),
    [Premium] money NOT NULL CHECK ([Premium] >= 0) DEFAULT 0,
    [Salary] money NOT NULL CHECK ([Salary] > 0),
    [EmploymentDate] date NOT NULL CHECK (EmploymentDate >= '1990-01-01'),
)

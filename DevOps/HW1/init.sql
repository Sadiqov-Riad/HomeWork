CREATE TABLE "Users" (
    "Id" SERIAL PRIMARY KEY,
    "Name" TEXT NOT NULL
);

INSERT INTO "Users" ("Name") VALUES 
('System Administrator'),
('Docker Specialist'),
('DotNet Developer'),
('Riad MacBook Air');
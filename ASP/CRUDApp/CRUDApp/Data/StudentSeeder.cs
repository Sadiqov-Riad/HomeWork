using Bogus;
using CrudApp.Models;

namespace CrudApp.Data
{
    public static class StudentSeeder
    {
        public static List<Student> GenerateStudents(int count = 10)
        {
            var faker = new Faker<Student>("en")
                .RuleFor(s => s.StudentId, f => 0) // Id генерируется БД
                .RuleFor(s => s.Name, f => f.Person.FullName)
                .RuleFor(s => s.Email, f => f.Internet.Email())
                .RuleFor(s => s.Course, f => f.PickRandom(new[] { "Math", "Physics", "CS", "History" }))
                .RuleFor(s => s.EnrollmentDate, f => f.Date.Past(3));

            return faker.Generate(count);
        }
    }
}

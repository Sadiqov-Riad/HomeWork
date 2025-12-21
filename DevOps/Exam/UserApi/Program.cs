using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("Default");
builder.Services.AddDbContext<UserDbContext>(options => options.UseNpgsql(connectionString));

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<UserDbContext>();
    db.Database.EnsureCreated();
    if (!db.Users.Any()) {
        db.Users.Add(new User { Id = 1, Username = "Riad" });
        db.SaveChanges();
    }
}

app.MapGet("/api/users/{id}", async (int id, UserDbContext db) => 
    await db.Users.FindAsync(id) is User user ? Results.Ok(user) : Results.NotFound());

app.Run();

public class User { public int Id { get; set; } public string Username { get; set; } = ""; }
public class UserDbContext : DbContext {
    public UserDbContext(DbContextOptions<UserDbContext> options) : base(options) { }
    public DbSet<User> Users => Set<User>();
}
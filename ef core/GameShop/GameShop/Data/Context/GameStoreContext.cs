using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace GameShop;

public class GameStoreContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Game> Games { get; set; }
    public DbSet<Order> Orders { get; set; }
    public DbSet<OrderDetails> OrderItems { get; set; }
    public DbSet<Genre> Genres { get; set; }
    public DbSet<Platform> Platforms { get; set; }

    public GameStoreContext()
    {
        Database.Migrate();
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build()
            .GetConnectionString("Default");
        
        optionsBuilder.UseSqlServer(connectionString);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        modelBuilder.Entity<Genre>().HasData(new Genre[]
        {
            new Genre { Id = 1, Name = "Action" },
            new Genre { Id = 2, Name = "Adventure" },
            new Genre { Id = 3, Name = "Horror" },
            new Genre { Id = 4, Name = "Romance" }
        });

        modelBuilder.Entity<Platform>().HasData(new Platform[]
        {
            new Platform { Id = 1, Name = "Playstation" },
            new Platform { Id = 2, Name = "Xbox" },
            new Platform { Id = 3, Name = "PC" },
            new Platform { Id = 4, Name = "Nintendo Switch" },
        });
    }
    
}

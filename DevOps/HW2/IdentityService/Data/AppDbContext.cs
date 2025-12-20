using Microsoft.EntityFrameworkCore;

namespace IdentityService.Data;

public class User 
{ 
    public int Id { get; set; } 
    public string Username { get; set; } = string.Empty;
}

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options) 
{
    public DbSet<User> Users => Set<User>();
}
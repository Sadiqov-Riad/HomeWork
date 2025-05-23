
namespace GameShop;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    
    public string Password { get; set; }
    
    public string Email { get; set; }
    public decimal Balance { get; set; }
    
    public ICollection<Order> Orders { get; set; }
}
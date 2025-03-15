namespace GameShop;

public class Order
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public DateTime Date { get; set; }
    public decimal TotalAmount { get; set; }
    public User User { get; set; }
    
    public ICollection<OrderDetails> OrderDetails { get; set; }
}
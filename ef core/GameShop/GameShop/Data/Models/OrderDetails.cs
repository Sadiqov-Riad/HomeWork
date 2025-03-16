namespace GameShop;

public class OrderDetails
{
    public int Id { get; set; }
    public int OrderId { get; set; }
    public int GameId { get; set; }
    public decimal TotalPrice { get; set; }
    public Order Order { get; set; }
    public Game Game { get; set; }
    
    
}
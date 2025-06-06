namespace GameShop;

public class Game
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int GenreId { get; set; }
    public int PlatformId { get; set; }
    public decimal Price { get; set; }
    
    public Genre Genre { get; set; }
    
    public Platform Platform { get; set; }
    
    public ICollection<OrderDetails> OrderDetails { get; set; }
}


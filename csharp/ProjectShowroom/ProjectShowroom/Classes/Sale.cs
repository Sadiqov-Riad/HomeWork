namespace ProjectShowroom;

public class Sale
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid ShowroomId { get; set; } 
    public Guid CarId { get; set; } 
    public Guid UserId { get; set; } 
    public DateTime SaleDate { get; set; }
}
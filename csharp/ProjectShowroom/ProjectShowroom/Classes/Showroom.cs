namespace ProjectShowroom;

public class Showroom
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public List<Car> Cars { get; set; }
    public int CarCapacity { get; set; }
    public int CarCount => Cars.Count; 
    public int SalesCount { get; set; }
}
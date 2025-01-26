using System.Security.Cryptography;

namespace ProjectShowroom;

public class Showroom
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Name { get; set; }
    public List<Car> Cars { get; set; } = new List<Car>();
    public int CarCapacity { get; set; }
    public int SalesCount { get; set; }
    public Showroom(string name, int carCapacity)
    {
        Name = name;
        CarCapacity = carCapacity;
    }

}

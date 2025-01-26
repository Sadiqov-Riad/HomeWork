namespace ProjectShowroom;

public class Car
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Brand { get; set; }
    public string Model { get; set; }
    public decimal Price { get; set; }
    public Car() {}
    public Car(string model, string manufacturer, decimal price)
    {
        Brand = model;
        Model = manufacturer;
        Price = price;
    }
}
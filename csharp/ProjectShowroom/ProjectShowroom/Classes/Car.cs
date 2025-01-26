namespace ProjectShowroom;

public class Car
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Model { get; set; }
    public string Manufacturer { get; set; }
    public decimal Price { get; set; }

    public Car(string model, string manufacturer, decimal price)
    {
        Model = model;
        Manufacturer = manufacturer;
        Price = price;
    }
}
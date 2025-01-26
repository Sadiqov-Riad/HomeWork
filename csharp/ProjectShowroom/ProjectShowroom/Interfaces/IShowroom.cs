namespace ProjectShowroom.Interfaces;

public interface IShowroom
{
    public void AddCar(Car car);
    public void RemoveCar(Guid carId);
    public void EditCar(Guid carId, string newModel, string newManufacturer, decimal newPrice);
    public void DisplayCars();
}
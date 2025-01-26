using System.Text.Json;

namespace ProjectShowroom;

public class ShowroomService
{
    private List<Showroom> showrooms = new List<Showroom>();
    private const string FilePath = "Data/Showroom.json";

    public ShowroomService()
    {
        LoadData();
    }

    private void LoadData()
    {
        if (File.Exists(FilePath))
        {
            var json = File.ReadAllText(FilePath);
            showrooms = JsonSerializer.Deserialize<List<Showroom>>(json) ?? new List<Showroom>();
        }
    }

    private void SaveData()
    {
        var json = JsonSerializer.Serialize(showrooms, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(FilePath, json);
    }


    public void CreateShowroom(string name, int capacity)
    {
        if (showrooms.Any(s => s.Name.Equals(name, StringComparison.OrdinalIgnoreCase)))
        {
            Console.WriteLine("A showroom with this name already exists.");
            return;
        }

        var showroom = new Showroom(name, capacity);
        showrooms.Add(showroom);
        SaveData();
        Console.WriteLine("Showroom created successfully!");
    }


    public void DeleteShowroom(Guid showroomId)
    {
        var showroom = showrooms.FirstOrDefault(s => s.Id == showroomId);
        if (showroom == null)
        {
            Console.WriteLine("Showroom not found.");
            return;
        }

        showrooms.Remove(showroom);
        SaveData();
        Console.WriteLine("Showroom deleted successfully!");
    }

    public void EditShowroom(Guid showroomId, string newName, int newCapacity)
    {
        var showroom = showrooms.FirstOrDefault(s => s.Id == showroomId);
        if (showroom == null)
        {
            Console.WriteLine("Showroom not found.");
            return;
        }

        showroom.Name = newName;
        showroom.CarCapacity = newCapacity;
        SaveData();
        Console.WriteLine("Showroom updated successfully!");
    }

    public void DisplayShowrooms()
    {
        if (!showrooms.Any())
        {
            Console.WriteLine("No showrooms available.");
            return;
        }

        foreach (var showroom in showrooms)
        {
            Console.WriteLine($"ID: {showroom.Id}\nName: {showroom.Name}\nCapacity: {showroom.CarCapacity}\nCurrent Cars: {showroom.Cars.Count}\nSales: {showroom.SalesCount}\n");
        }
    }
}
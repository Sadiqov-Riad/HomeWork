using System.Text.Json;

namespace ProjectShowroom;

public class ShowroomService
{
    public List<Showroom> Showrooms { get; set; } = new();
    private const string FilePath = "./Data/Showroom.json";

    public ShowroomService()
    {
        LoadData();
    }

    private void LoadData()
    {
        if (File.Exists(FilePath))
        {
            var json = File.ReadAllText(FilePath);
            if (!string.IsNullOrWhiteSpace(json))
            {
                Showrooms = JsonSerializer.Deserialize<List<Showroom>>(json);
            }
        }
    }

    private void SaveData()
    {
        var json = JsonSerializer.Serialize(Showrooms);
        File.WriteAllText(FilePath, json);
    }

    public void CreateShowroom(string name, int capacity)
    {
        LoadData();
        
        if (Showrooms.Any(s => s.Name == name))
        {
            Console.WriteLine("A showroom with this name already exists.");
            return;
        }

        Showrooms.Add(new Showroom(name, capacity));
        SaveData();
        Console.WriteLine("Showroom created successfully!");
    }

    public void DeleteShowroom(Guid showroomId)
    {
        LoadData();
        var showroom = Showrooms.FirstOrDefault(s => s.Id == showroomId);
        if (showroom == null)
        {
            Console.WriteLine("Showroom not found.");
            return;
        }

        Showrooms.Remove(showroom);
        SaveData();
        Console.WriteLine("Showroom deleted successfully!");
    }

    public void EditShowroom(Guid showroomId, string newName, int newCapacity)
    {
        LoadData();
        var showroom = Showrooms.FirstOrDefault(s => s.Id == showroomId);
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
        LoadData();
        if (!Showrooms.Any())
        {
            Console.WriteLine("No showrooms available.");
            return;
        }

        foreach (var showroom in Showrooms)
        {
            Console.WriteLine($"ID: {showroom.Id}\nName: {showroom.Name}\nCapacity: {showroom.CarCapacity}\nCurrent Cars: {showroom.Cars.Count}\nSales: {showroom.SalesCount}\n");
        }
    }
}
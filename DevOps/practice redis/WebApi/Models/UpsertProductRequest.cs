namespace WebApi.Models;

public sealed class UpsertProductRequest
{
    public string Name { get; set; } = default!;
    public decimal Price { get; set; }
}




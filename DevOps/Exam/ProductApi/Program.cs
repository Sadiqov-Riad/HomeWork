using MongoDB.Driver;
using Microsoft.Extensions.Caching.Distributed;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);

var mongoClient = new MongoClient(builder.Configuration["MongoConnection"]);
var mongoDb = mongoClient.GetDatabase("CatalogDb");
builder.Services.AddSingleton(mongoDb.GetCollection<Product>("Products"));


builder.Services.AddStackExchangeRedisCache(options => {
    options.Configuration = builder.Configuration["RedisConnection"];
});

var app = builder.Build();


app.MapGet("/api/products", async (IMongoCollection<Product> collection, IDistributedCache cache) => {
    const string cacheKey = "all_products";
    

    var cachedData = await cache.GetStringAsync(cacheKey);
    if (!string.IsNullOrEmpty(cachedData)) {
        return Results.Ok(JsonSerializer.Deserialize<List<Product>>(cachedData));
    }

    var products = await collection.Find(_ => true).ToListAsync();


    if (products.Any()) {
        var options = new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(1) };
        await cache.SetStringAsync(cacheKey, JsonSerializer.Serialize(products), options);
    }

    return Results.Ok(products);
});

app.Run();

public class Product { 
    [MongoDB.Bson.Serialization.Attributes.BsonId]
    [MongoDB.Bson.Serialization.Attributes.BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
    public string? Id { get; set; } 
    public string Name { get; set; } = "";
    public decimal Price { get; set; }
}
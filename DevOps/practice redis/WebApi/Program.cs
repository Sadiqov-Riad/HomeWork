using Microsoft.Extensions.Caching.Distributed;
using MongoDB.Driver;
using WebApi.Models;
using WebApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Redis (IDistributedCache)
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration =
        builder.Configuration["Redis:Configuration"]
        ?? builder.Configuration.GetConnectionString("Redis")
        ?? "localhost:6379";
});

// MongoDB
builder.Services.AddSingleton<IMongoClient>(_ =>
{
    var connectionString =
        builder.Configuration["Mongo:ConnectionString"]
        ?? builder.Configuration.GetConnectionString("Mongo")
        ?? "mongodb://localhost:27017";
    return new MongoClient(connectionString);
});

builder.Services.AddSingleton(sp =>
{
    var dbName = builder.Configuration["Mongo:Database"] ?? "appdb";
    return sp.GetRequiredService<IMongoClient>().GetDatabase(dbName);
});

builder.Services.AddSingleton(sp =>
    sp.GetRequiredService<IMongoDatabase>().GetCollection<Product>("products"));

builder.Services.AddSingleton<ProductService>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

// Cache-aside / Lazy caching example
app.MapGet("/products/{id}", async (string id, ProductService svc, CancellationToken ct) =>
{
    var product = await svc.GetByIdAsync(id, ct);
    return product is null ? Results.NotFound() : Results.Ok(product);
})
.WithName("GetProductById");

app.MapPut("/products/{id}", async (string id, UpsertProductRequest body, ProductService svc, CancellationToken ct) =>
{
    var saved = await svc.UpsertAsync(new Product
    {
        Id = id,
        Name = body.Name,
        Price = body.Price
    }, ct);

    return Results.Ok(saved);
})
.WithName("UpsertProduct");

app.MapDelete("/products/{id}", async (string id, ProductService svc, CancellationToken ct) =>
{
    var deleted = await svc.DeleteAsync(id, ct);
    return deleted ? Results.NoContent() : Results.NotFound();
})
.WithName("DeleteProduct");

app.MapGet("/health", () => Results.Ok(new { status = "ok" }))
.WithName("Health");

app.Run();
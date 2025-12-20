using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using MongoDB.Bson;

namespace DomainService1.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ItemsController(IMongoClient client) : ControllerBase
{
    private IMongoCollection<BsonDocument> Collection => 
        client.GetDatabase("Domain1DB").GetCollection<BsonDocument>("Items");

    [HttpPost]
    public async Task<IActionResult> Add(string name)
    {
        var doc = new BsonDocument { { "name", name }, { "createdAt", DateTime.UtcNow } };
        await Collection.InsertOneAsync(doc);
        return Ok("Item added to MongoDB");
    }

    [HttpGet]
    public async Task<IActionResult> Get() 
    {
        var docs = await Collection.Find(new BsonDocument()).ToListAsync();
        return Ok(docs.Select(d => d.ToString()));
    }
}
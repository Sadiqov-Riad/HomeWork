using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace DomainService2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DataController(IDistributedCache cache) : ControllerBase
{
    [HttpGet("{id}")]
    public async Task<IActionResult> GetLazyData(string id)
    {
        string cacheKey = $"item_{id}";

        var cachedValue = await cache.GetStringAsync(cacheKey);
        if (!string.IsNullOrEmpty(cachedValue))
        {
            return Ok(new { source = "Redis Cache", data = cachedValue });
        }

        await Task.Delay(500); 
        string dbValue = $"Value for {id} fetched from Postgres";

        // 3. Сохраняем в кэш (Lazy Caching)
        await cache.SetStringAsync(cacheKey, dbValue, new DistributedCacheEntryOptions 
        { 
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(2) 
        });

        return Ok(new { source = "Database", data = dbValue });
    }
}
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace DomainService2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CacheController(IDistributedCache cache) : ControllerBase
{
    [HttpGet("{key}")]
    public async Task<IActionResult> GetWithLazyCache(string key)
    {
        // 1. Пробуем получить из Redis
        var cachedData = await cache.GetStringAsync(key);

        if (!string.IsNullOrEmpty(cachedData))
        {
            return Ok(new { source = "Redis (Fast)", data = cachedData });
        }

        // 2. Если в кэше нет (Cache Miss), "идем в базу"
        string fakeDbData = $"Value for {key} from PostgreSQL DB at {DateTime.Now}";

        // 3. Сохраняем в кэш на 30 секунд
        await cache.SetStringAsync(key, fakeDbData, new DistributedCacheEntryOptions
        {
            AbsoluteExpirationRelativeToNow = TimeSpan.FromSeconds(30)
        });

        return Ok(new { source = "Database (Slow)", data = fakeDbData });
    }
}
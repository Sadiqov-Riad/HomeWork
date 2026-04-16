using System.Text.Json;
using Microsoft.Extensions.Caching.Distributed;
using MongoDB.Driver;
using WebApi.Models;

namespace WebApi.Services;

public sealed class ProductService
{
    private static readonly JsonSerializerOptions JsonOptions = new(JsonSerializerDefaults.Web);

    private readonly IDistributedCache _cache;
    private readonly IMongoCollection<Product> _products;
    private readonly TimeSpan _ttl;

    public ProductService(IDistributedCache cache, IMongoCollection<Product> products, IConfiguration config)
    {
        _cache = cache;
        _products = products;
        _ttl = TimeSpan.FromSeconds(config.GetValue<int?>("Cache:ProductTtlSeconds") ?? 600);
    }

    public async Task<Product?> GetByIdAsync(string id, CancellationToken ct)
    {
        var cacheKey = CacheKey(id);

        var cached = await _cache.GetStringAsync(cacheKey, ct);
        if (!string.IsNullOrWhiteSpace(cached))
        {
            return JsonSerializer.Deserialize<Product>(cached, JsonOptions);
        }

        var product = await _products.Find(p => p.Id == id).FirstOrDefaultAsync(ct);
        if (product is null)
        {
            return null;
        }

        await _cache.SetStringAsync(
            cacheKey,
            JsonSerializer.Serialize(product, JsonOptions),
            new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = _ttl },
            ct);

        return product;
    }

    public async Task<Product> UpsertAsync(Product product, CancellationToken ct)
    {
        await _products.ReplaceOneAsync(p => p.Id == product.Id, product, new ReplaceOptions { IsUpsert = true }, ct);

        // чтобы не ждать следующего GET — сразу прогреваем/обновляем кэш
        await _cache.SetStringAsync(
            CacheKey(product.Id),
            JsonSerializer.Serialize(product, JsonOptions),
            new DistributedCacheEntryOptions { AbsoluteExpirationRelativeToNow = _ttl },
            ct);

        return product;
    }

    public async Task<bool> DeleteAsync(string id, CancellationToken ct)
    {
        var result = await _products.DeleteOneAsync(p => p.Id == id, ct);
        if (result.DeletedCount <= 0)
        {
            return false;
        }

        await _cache.RemoveAsync(CacheKey(id), ct);
        return true;
    }

    private static string CacheKey(string id) => $"products:{id}";
}




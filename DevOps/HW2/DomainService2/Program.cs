using Microsoft.AspNetCore.OpenApi;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

// Настройка Redis
var redisConn = builder.Configuration.GetConnectionString("Redis") ?? "localhost:6379";
builder.Services.AddStackExchangeRedisCache(options => {
    options.Configuration = redisConn;
});

var app = builder.Build();
app.MapControllers();
app.Run();
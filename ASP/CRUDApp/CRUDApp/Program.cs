using CRUDApp.Data;
using Microsoft.EntityFrameworkCore;
 
var builder = WebApplication.CreateBuilder(args);
 
// Add services to the container.
builder.Services.AddControllersWithViews();
 
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);
 
var app = builder.Build();
 
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
 
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthorization();
 
app.MapStaticAssets();
 
app.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();
 
 
// Сидирование студентов Bogus
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();
 
    if (!context.Students.Any())
    {
        var students = StudentSeeder.GenerateStudents(20);
        context.Students.AddRange(students);
        context.SaveChanges();
    }
}
 
app.Run();
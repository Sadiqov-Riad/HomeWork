using Microsoft.AspNetCore.Mvc;
using IdentityService.Data;
using Microsoft.EntityFrameworkCore;

namespace IdentityService.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsersController(AppDbContext context) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(string username)
    {
        var user = new User { Username = username };
        context.Users.Add(user);
        await context.SaveChangesAsync();
        return Ok(user);
    }

    [HttpGet]
    public async Task<IActionResult> GetAll() => Ok(await context.Users.ToListAsync());
}
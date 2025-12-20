using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class DataController : ControllerBase {
    private readonly AppDbContext _db;
    public DataController(AppDbContext db) => _db = db;

    [HttpGet]
    public async Task<IActionResult> Get() {
        try {
            var users = await _db.Users.ToListAsync();
            return Ok(users);
        } catch (System.Exception ex) {
            return BadRequest(ex.Message);
        }
    }
}
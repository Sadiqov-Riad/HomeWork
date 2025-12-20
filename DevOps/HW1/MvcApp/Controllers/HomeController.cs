using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;

namespace MvcApp.Controllers;

public class HomeController : Controller
{
    private readonly HttpClient _http;
    private readonly string _apiBaseAddress;

    public HomeController(IHttpClientFactory factory, IConfiguration conf)
    {
        _http = factory.CreateClient();
        _apiBaseAddress = conf["ApiSettings:BaseAddress"] ?? "http://webapi-container:8080";
    }

    public async Task<IActionResult> Index()
    {
        try
        {
            var response = await _http.GetStringAsync($"{_apiBaseAddress}/Data");
            ViewBag.Data = response;
        }
        catch (System.Exception ex)
        {
            ViewBag.Data = $"Ошибка подключения к API: {ex.Message}";
        }
        return View();
    }
}
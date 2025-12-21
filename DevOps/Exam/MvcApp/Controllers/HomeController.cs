using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

public class HomeController : Controller {
    private readonly IHttpClientFactory _httpFactory;
    private readonly string _usersUrl = "http://ms-users-api:8080/api/users/1";
    private readonly string _productsUrl = "http://ms-products-api:8080/api/products";

    public HomeController(IHttpClientFactory httpFactory) => _httpFactory = httpFactory;

    public async Task<IActionResult> Index() {
        var client = _httpFactory.CreateClient();

        var userTask = client.GetFromJsonAsync<UserViewModel>(_usersUrl);
        var productsTask = client.GetFromJsonAsync<List<ProductViewModel>>(_productsUrl);

        await Task.WhenAll(userTask, productsTask);

        var model = new DashboardViewModel {
            User = await userTask,
            Products = await productsTask ?? new List<ProductViewModel>()
        };
        return View(model);
    }
}

public class UserViewModel { public string Username { get; set; } = ""; }
public class ProductViewModel { public string Name { get; set; } = ""; public decimal Price { get; set; } }
public class DashboardViewModel { public UserViewModel? User { get; set; } public List<ProductViewModel> Products { get; set; } = new(); }
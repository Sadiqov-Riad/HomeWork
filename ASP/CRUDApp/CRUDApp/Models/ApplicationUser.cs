using Microsoft.AspNetCore.Identity;

namespace CRUDApp.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
    }
}

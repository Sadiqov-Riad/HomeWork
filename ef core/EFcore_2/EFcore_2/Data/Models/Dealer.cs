using System.ComponentModel.DataAnnotations;

namespace EFcore_2.Data.Models;

public class Dealer
{
    [Key]
    public int Id { get; set; }
    
    [Required]
    [MaxLength(50)]
    public string Name { get; set; }
    
    [Required]
    [MaxLength(50)]
    public string Location { get; set; }
    

    public virtual ICollection<Car> Cars { get; set; }
}
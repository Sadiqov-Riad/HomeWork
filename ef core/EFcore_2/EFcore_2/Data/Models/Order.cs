using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EFcore_2.Data.Models;

public class Order
{
    [Key]
    public int Id { get; set; }
    
    [ForeignKey("Customer")]
    public int CustomerId { get; set; }

    public virtual Customer Customer { get; set; }
}
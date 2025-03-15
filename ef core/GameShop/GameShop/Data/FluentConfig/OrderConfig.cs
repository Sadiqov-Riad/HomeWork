using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameShop.Data.FluentConfig;

public class OrderConfig : IEntityTypeConfiguration<Order>
{
    public void Configure(EntityTypeBuilder<Order> builder)
    {
        builder.HasKey(o => o.Id);

        builder.HasOne(o => o.User)
            .WithMany(u => u.Orders) 
            .HasForeignKey(o => o.UserId);

        builder.Property(o => o.Date)
            .IsRequired();

        builder.Property(o => o.TotalAmount)
            .IsRequired();
        
        builder.HasMany(oc => oc.OrderDetails)
            .WithOne(oc => oc.Order)
            .HasForeignKey(oc => oc.OrderId);
    }
}
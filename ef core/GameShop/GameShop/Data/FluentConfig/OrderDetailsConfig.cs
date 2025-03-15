using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameShop.Data.FluentConfig;

public class OrderDetailsConfig : IEntityTypeConfiguration<OrderDetails>
{
    public void Configure(EntityTypeBuilder<OrderDetails> builder)
    {
        builder.HasKey(oc => oc.Id);

        builder.HasOne(oc => oc.Order)
            .WithMany(o => o.OrderDetails)
            .HasForeignKey(oc => oc.OrderId);
        
        builder.HasOne(oc => oc.Game)
            .WithMany(g => g.OrderDetails)
            .HasForeignKey(oc => oc.GameId);
        
        builder.Property(oc => oc.Quantity)
            .IsRequired();
        
        builder.Property(oc => oc.TotalPrice)
            .IsRequired();
    }
}
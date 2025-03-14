using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameShop.Data.FluentConfig;

public class OrderDetailsConfig : IEntityTypeConfiguration<OrderDetails>
{
    public void Configure(EntityTypeBuilder<OrderDetails> builder)
    {
        builder.HasKey(oi => oi.Id);
        
        builder.Property(oi => oi.Quantity)
            .IsRequired();
        
        builder.Property(oi => oi.TotalPrice)
            .HasColumnType("decimal(18,2)");
        
        builder.HasOne(oi => oi.Order)
            .WithMany(o => o.OrderDetailsList)
            .HasForeignKey(oi => oi.OrderId);
        
        builder.HasOne(oi => oi.Game)
            .WithMany()
            .HasForeignKey(oi => oi.GameId);
    }
}
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameShop.Data.FluentConfig;

public class GameConfig : IEntityTypeConfiguration<Game>
{
    public void Configure(EntityTypeBuilder<Game> builder)
    {
        builder.HasKey(g => g.Id);
        
        builder.Property(g => g.Title)
            .HasMaxLength(150)
            .IsRequired();

        builder.HasOne(g => g.Genre)
            .WithMany(g => g.Games) 
            .HasForeignKey(g => g.GenreId);

        builder.HasOne(g => g.Platform)
            .WithMany(p => p.Games) 
            .HasForeignKey(g => g.PlatformId);
        
        builder.Property(g => g.Price)
            .IsRequired();
        
        builder.HasMany(g => g.OrderDetails)
            .WithOne(oc => oc.Game)  
            .HasForeignKey(oc => oc.GameId);
    }
}
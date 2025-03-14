using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GameShop.Data.FluentConfig;

public class GameConfig : IEntityTypeConfiguration<Game>
{
    public void Configure(EntityTypeBuilder<Game> builder)
    {
        builder.HasKey(g => g.Id);
        
        builder.Property(g => g.Title)
            .IsRequired()
            .HasMaxLength(150);
        
        builder.Property(g => g.Price)
            .HasColumnType("decimal(18,2)");
        
        builder.HasOne(g => g.Genre)
            .WithMany()
            .HasForeignKey(g => g.GenreId);
        
        builder.HasOne(g => g.Platform)
            .WithMany()
            .HasForeignKey(g => g.PlatformId);
    }
}
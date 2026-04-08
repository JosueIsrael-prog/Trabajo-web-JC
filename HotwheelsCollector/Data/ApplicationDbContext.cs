using HotwheelsCollector.Models;
using Microsoft.EntityFrameworkCore;

namespace HotwheelsCollector.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Hotwheels> Hotwheels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // User relationships
            modelBuilder.Entity<User>()
                .HasMany(u => u.HotwheelsList)
                .WithOne(h => h.User)
                .HasForeignKey(h => h.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            // Hotwheels properties
            modelBuilder.Entity<Hotwheels>()
                .Property(h => h.EstimatedValue)
                .HasPrecision(10, 2);
        }
    }
}

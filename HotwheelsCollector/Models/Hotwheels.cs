namespace HotwheelsCollector.Models
{
    public class Hotwheels
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Model { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public int Year { get; set; }
        public string Condition { get; set; } = string.Empty; // New, Mint, Excellent, Good, Fair, Poor
        public decimal EstimatedValue { get; set; }
        public string? Notes { get; set; }
        public DateTime AcquisitionDate { get; set; } = DateTime.UtcNow;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public User User { get; set; } = null!;
    }
}

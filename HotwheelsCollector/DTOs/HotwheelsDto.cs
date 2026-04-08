namespace HotwheelsCollector.DTOs
{
    public class HotwheelsDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Model { get; set; } = string.Empty;
        public string Color { get; set; } = string.Empty;
        public int Year { get; set; }
        public string Condition { get; set; } = string.Empty;
        public decimal EstimatedValue { get; set; }
        public string? Notes { get; set; }
        public DateTime AcquisitionDate { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}

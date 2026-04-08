using HotwheelsCollector.Data;
using HotwheelsCollector.DTOs;
using HotwheelsCollector.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace HotwheelsCollector.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class HotwheelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public HotwheelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        private int GetUserId()
        {
            return int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value ?? "0");
        }

        [HttpGet]
        public async Task<ActionResult<List<HotwheelsDto>>> GetAllMyHotwheels()
        {
            var userId = GetUserId();
            var hotwheels = await _context.Hotwheels
                .Where(h => h.UserId == userId)
                .Select(h => new HotwheelsDto
                {
                    Id = h.Id,
                    Name = h.Name,
                    Model = h.Model,
                    Color = h.Color,
                    Year = h.Year,
                    Condition = h.Condition,
                    EstimatedValue = h.EstimatedValue,
                    Notes = h.Notes,
                    AcquisitionDate = h.AcquisitionDate,
                    CreatedAt = h.CreatedAt
                })
                .ToListAsync();

            return Ok(hotwheels);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<HotwheelsDto>> GetHotwheels(int id)
        {
            var userId = GetUserId();
            var hotwheels = await _context.Hotwheels
                .FirstOrDefaultAsync(h => h.Id == id && h.UserId == userId);

            if (hotwheels == null)
                return NotFound("Hotwheels no encontrado");

            return Ok(new HotwheelsDto
            {
                Id = hotwheels.Id,
                Name = hotwheels.Name,
                Model = hotwheels.Model,
                Color = hotwheels.Color,
                Year = hotwheels.Year,
                Condition = hotwheels.Condition,
                EstimatedValue = hotwheels.EstimatedValue,
                Notes = hotwheels.Notes,
                AcquisitionDate = hotwheels.AcquisitionDate,
                CreatedAt = hotwheels.CreatedAt
            });
        }

        [HttpPost]
        public async Task<ActionResult<HotwheelsDto>> CreateHotwheels(HotwheelsDto dto)
        {
            var userId = GetUserId();
            var hotwheels = new Hotwheels
            {
                UserId = userId,
                Name = dto.Name,
                Model = dto.Model,
                Color = dto.Color,
                Year = dto.Year,
                Condition = dto.Condition,
                EstimatedValue = dto.EstimatedValue,
                Notes = dto.Notes,
                AcquisitionDate = dto.AcquisitionDate
            };

            _context.Hotwheels.Add(hotwheels);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHotwheels), new { id = hotwheels.Id }, 
                new HotwheelsDto
                {
                    Id = hotwheels.Id,
                    Name = hotwheels.Name,
                    Model = hotwheels.Model,
                    Color = hotwheels.Color,
                    Year = hotwheels.Year,
                    Condition = hotwheels.Condition,
                    EstimatedValue = hotwheels.EstimatedValue,
                    Notes = hotwheels.Notes,
                    AcquisitionDate = hotwheels.AcquisitionDate,
                    CreatedAt = hotwheels.CreatedAt
                });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotwheels(int id, HotwheelsDto dto)
        {
            var userId = GetUserId();
            var hotwheels = await _context.Hotwheels
                .FirstOrDefaultAsync(h => h.Id == id && h.UserId == userId);

            if (hotwheels == null)
                return NotFound("Hotwheels no encontrado");

            hotwheels.Name = dto.Name;
            hotwheels.Model = dto.Model;
            hotwheels.Color = dto.Color;
            hotwheels.Year = dto.Year;
            hotwheels.Condition = dto.Condition;
            hotwheels.EstimatedValue = dto.EstimatedValue;
            hotwheels.Notes = dto.Notes;
            hotwheels.AcquisitionDate = dto.AcquisitionDate;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotwheels(int id)
        {
            var userId = GetUserId();
            var hotwheels = await _context.Hotwheels
                .FirstOrDefaultAsync(h => h.Id == id && h.UserId == userId);

            if (hotwheels == null)
                return NotFound("Hotwheels no encontrado");

            _context.Hotwheels.Remove(hotwheels);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}

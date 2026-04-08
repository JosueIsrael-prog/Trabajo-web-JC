using HotwheelsCollector.Data;
using HotwheelsCollector.DTOs;
using HotwheelsCollector.Models;
using HotwheelsCollector.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BC = BCrypt.Net.BCrypt;

namespace HotwheelsCollector.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly JwtService _jwtService;

        public AuthController(ApplicationDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AuthResponse>> Register(RegisterRequest request)
        {
            if (await _context.Users.AnyAsync(u => u.Username == request.Username))
                return BadRequest("El usuario ya existe");

            if (await _context.Users.AnyAsync(u => u.Email == request.Email))
                return BadRequest("El email ya está registrado");

            var user = new User
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = BC.HashPassword(request.Password)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var token = _jwtService.GenerateToken(user.Id, user.Username, user.Email);

            return Ok(new AuthResponse
            {
                UserId = user.Id,
                Username = user.Username,
                Email = user.Email,
                Token = token
            });
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(LoginRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Username == request.Username);

            if (user == null || !BC.Verify(request.Password, user.PasswordHash))
                return Unauthorized("Usuario o contraseña inválidos");

            var token = _jwtService.GenerateToken(user.Id, user.Username, user.Email);

            return Ok(new AuthResponse
            {
                UserId = user.Id,
                Username = user.Username,
                Email = user.Email,
                Token = token
            });
        }
    }
}

using HotwheelsCollector.Data;
using HotwheelsCollector.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database - SQLite
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite("Data Source=hotwheels.db"));

// JWT Service
builder.Services.AddScoped<JwtService>();

// Authentication with JWT
var key = Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"] ?? "your-super-secret-key-change-this-in-production");
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateLifetime = true
        };
    });

// CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", corsBuilder =>
    {
        corsBuilder.WithOrigins("http://localhost:3000", "http://localhost", "https://localhost")
                   .AllowAnyMethod()
                   .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReact");

// Middleware para servir archivos estáticos (React compilado)
app.UseDefaultFiles();
app.UseStaticFiles();

// Authentication & Authorization
app.UseAuthentication();
app.UseAuthorization();

// API Routes
app.MapControllers();

// Fallback para SPA - redirigir rutas desconocidas a index.html
app.MapFallbackToFile("index.html");

app.Run();


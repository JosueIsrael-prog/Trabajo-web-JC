# 📋 GUÍA DE VERIFICACIÓN - Arquitectura MVC

Después de ejecutar el setup, verifica que tu proyecto tenga toda la estructura necesaria.

## ✅ Checklist de Carpetas

- [x] **Controllers/** contiene:
  - AuthController.cs
  - HotwheelsController.cs

- [x] **Models/** contiene:
  - User.cs
  - Hotwheels.cs

- [x] **Services/** contiene:
  - JwtService.cs

- [x] **Data/** contiene:
  - ApplicationDbContext.cs

- [x] **DTOs/** contiene:
  - AuthResponse.cs
  - HotwheelsDto.cs
  - LoginRequest.cs
  - RegisterRequest.cs

- [x] **ClientApp/** contiene:
  - package.json
  - src/
  - public/

- [x] **wwwroot/** contiene:
  - index.html (base)
  - static/ (se crea al compilar)

## ✅ Checklist de Archivos Raíz

- [x] Program.cs (configurado para MVC + React)
- [x] appsettings.json (con configuración JWT)
- [x] HotwheelsCollector.csproj (con dependencias correctas)
- [x] .gitignore
- [x] README.md
- [x] setup.bat

## ✅ Verificar Configuración

### 1. Verificar Program.cs

Debe incluir:
```csharp
// Controllers
builder.Services.AddControllers();
app.MapControllers();

// Static Files
app.UseDefaultFiles();
app.UseStaticFiles();

// SPA Fallback
app.MapFallbackToFile("index.html");
```

### 2. Verificar appsettings.json

Debe tener:
```json
"Jwt": {
  "Key": "tu-clave-secreta...",
  "Issuer": "hotwheels-collector",
  "Audience": "hotwheels-users"
}
```

### 3. Verificar ClientApp/package.json

Debe incluir:
```json
"build": "react-scripts build && move /Y build\\* ..\\wwwroot"
```

### 4. Verificar .csproj

Debe incluir paquetes:
- Microsoft.EntityFrameworkCore
- Microsoft.EntityFrameworkCore.Sqlite
- Microsoft.AspNetCore.Authentication.JwtBearer
- BCrypt.Net-Next

## 🚀 Pasos de Ejecución

```bash
# 1. Setup automático (recomendado)
.\setup.bat

# O manual:

# 2. Restaurar dependencias .NET
dotnet restore

# 3. Instalar dependencias Node
cd ClientApp
npm install
npm run build
cd ..

# 4. Crear base de datos
dotnet ef database update

# 5. Ejecutar aplicación
dotnet run
```

## 🔗 URLs Disponibles

- **Frontend SPA**: http://localhost:5034
- **API Base**: http://localhost:5034/api
- **Swagger UI**: http://localhost:5034/swagger

## 🧪 Pruebas

### Probar Endpoint de Registro

```bash
curl -X POST http://localhost:5034/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"test\",\"email\":\"test@example.com\",\"password\":\"Test123!\"}"
```

### Probar Login

```bash
curl -X POST http://localhost:5034/api/auth/login ^
  -H "Content-Type: application/json" ^
  -d "{\"username\":\"test\",\"password\":\"Test123!\"}"
```

### Probar Endpoint Protegido

```bash
curl -X GET http://localhost:5034/api/hotwheels ^
  -H "Authorization: Bearer <token-del-login>"
```

## ❌ Problemas Comunes

### "Controllers no se mapean"
**Solución**: Verifica que Program.cs tenga `app.MapControllers()`

### "React no carga"
**Solución**: Comprueba que `wwwroot/index.html` existe y que `npm run build` se ejecutó

### "Base de datos no se crea"
**Solución**: Ejecuta `dotnet ef database update`

### "Error CORS en desarrollo"
**Solución**: Asegúrate que CORS esté configurado para `http://localhost:3000`

## 📚 Archivos de Referencia

- [README.md](README.md) - Guía completa
- [README_MVC_ARCHITECTURE.md](README_MVC_ARCHITECTURE.md) - Detalles técnicos

## ✨ Próximos Pasos

1. ✅ Ejecutar `setup.bat`
2. ✅ Esperar a que se compile React
3. ✅ Ejecutar `dotnet run`
4. ✅ Abrir http://localhost:5034
5. ✅ Registrarse y probar

---

**¿Necesitas ayuda?** Revisa los archivos de documentación o ejecuta `dotnet ef database update` si hay problemas de base de datos.

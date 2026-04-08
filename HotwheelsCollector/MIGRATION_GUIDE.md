# 🔄 Migración: Proyecto Anterior → MVC Integrado

## Resumen de Cambios

Tu aplicación ha sido refactorizada de una **arquitectura de dos aplicaciones separadas** a una **arquitectura MVC integrada**.

### Antes (Separado)
```
hotwheels-collector/
├── api/              ← API .NET Core (puerto 5000)
└── client/           ← Aplicación React (puerto 3000)
```

### Ahora (MVC Integrado)
```
HotwheelsCollector/  ← Un único proyecto .NET que sirve todo
├── Controllers/      ← API REST
├── Models/          ← Entidades
├── ClientApp/       ← Código fuente React
└── wwwroot/         ← React compilado (archivos estáticos)
```

## ✨ Beneficios de la Migración

| Beneficio | Descripción |
|-----------|-------------|
| **Un único servidor** | Simplifica deployment |
| **MVC pattern auténtico** | Sigue arquitectura estándar |
| **Mejor rendimiento** | Sin llamadas CORS innecesarias |
| **Facilidad de deployment** | Un único servicio a publicar |
| **Caché de navegador** | Mejor uso de recursos |

## 📋 Archivo Migrado

### ✅ Backend (.NET Core)
- ✓ `Controllers/` - AuthController, HotwheelsController
- ✓ `Models/` - User, Hotwheels
- ✓ `Services/` - JwtService
- ✓ `Data/` - ApplicationDbContext
- ✓ `DTOs/` - Request/Response objects
- ✓ `Program.cs` - Configuración actualizada
- ✓ `appsettings.json` - Con JWT configuration

### ✅ Frontend (React)
- ✓ `ClientApp/` - Código fuente completo
- ✓ `wwwroot/` - Archivos estáticos

### ✅ Configuración
- ✓ `.csproj` - Dependencias correctas
- ✓ `.gitignore` - Exclusiones
- ✓ `README.md` - Documentación

## 🚀 Pasos para Comenzar

### Opción 1: Setup Automatizado (Recomendado)

```bash
cd HotwheelsCollector
.\setup.bat
```

El script hará todo automáticamente:
1. ✓ Verificar requisitos (.NET, Node.js)
2. ✓ Restaurar dependencias .NET
3. ✓ Instalar dependencias React
4. ✓ Compilar React a archivos estáticos
5. ✓ Crear base de datos SQLite

### Opción 2: Setup Manual

```bash
# 1. Entrar al proyecto
cd HotwheelsCollector

# 2. Restaurar .NET
dotnet restore

# 3. Instalar y compilar React
cd ClientApp
npm install
npm run build
cd ..

# 4. Crear base de datos
dotnet ef database update

# 5. Ejecutar
dotnet run
```

## 🔗 URLs Disponibles

```
Frontend:     http://localhost:5034         ← Todo aquí
API:          http://localhost:5034/api
Swagger:      http://localhost:5034/swagger
```

> **Nota**: Ya no necesitas ejecutar dos servidores (uno para .NET, otro para React)

## 📱 Flujo de Desarrollo

### Option A: Con Hot-Reload en Frontend

**Terminal 1** (Backend + static files):
```bash
dotnet watch run
```

**Terminal 2** (Frontend development):
```bash
cd ClientApp
npm start
```

React estará en `http://localhost:3000` con hot-reload, conectándose al backend.

### Option B: Solo Backend (Recomendado)

```bash
cd ClientApp
npm run build
cd ..
dotnet run
```

Cambios en React requieren `npm run build` manual.

## 🔄 Cambios en el Código

### API (Backend)

Los endpoints son los mismos, pero ahora accesibles desde la misma aplicación:

```javascript
// Antes (con CORS)
const response = await fetch('http://localhost:5000/api/auth/login', {...});

// Ahora (rutas relativas)
const response = await fetch('/api/auth/login', {...});

// O desde ClientApp/src/services/api.js:
import { authService } from './services/api';
authService.login(username, password);
```

### Ruteo (Frontend)

El ruteo sigue siendo el mismo con React Router:

```javascript
// Sin cambios en components, pages, etc.
// Solo actualiza la URL base en services/api.js (ya hecho)
```

## 💾 Base de Datos

La base de datos SQLite sigue siendo la misma:

```bash
hotwheels.db  (creada automáticamente en la raíz)
```

Migraciones:

```bash
# Nueva migración
dotnet ef migrations add NombreDeLaMigracion

# Aplicar cambios
dotnet ef database update

# Ver migraciones
dotnet ef migrations list
```

## 🔐 Seguridad JWT

Configuración actualizada en `appsettings.json`:

```json
"Jwt": {
  "Key": "your-super-secret-key-change-this-in-production-min-32-characters",
  "Issuer": "hotwheels-collector",
  "Audience": "hotwheels-users"
}
```

⚠️ **IMPORTANTE**: Cambiar en producción

## 📦 Build para Producción

```bash
# 1. Compilar React
cd ClientApp
npm run build
cd ..

# 2. Publicar .NET
dotnet publish -c Release -o ./publish

# 3. Desplegar carpeta 'publish'
```

## ❌ ¡Qué NO Hacer!

❌ **NO** ejecutar dos servidores:
- ~~dotnet run~~ en una terminal
- ~~npm start~~ en otra

❌ **NO** usar `http://localhost:5000` o `http://localhost:3000` en producción

❌ **NO** olvidar ejecutar `npm run build` antes de desplegar

## ✅ ¡Qué SÍ Hacer!

✅ Ejecutar `npm run build` antes de cambios en producción
✅ Cambiar JWT Key en `appsettings.Production.json`
✅ Usar HTTPS en producción
✅ Mantener `wwwroot/` en .gitignore

## 🆘 Troubleshooting

### Error: "Hotwheels no se carga"
```bash
npm run build  # Recompila React a wwwroot
dotnet run
```

### Error: "API devuelve 404"
Verifica que `Program.cs` tenga:
```csharp
app.MapControllers();  // Mapea los controllers
```

### Error: "Puerto en uso"
Cambia puerto en `Properties/launchSettings.json`

### Error: "No está autenticado"
Asegúrate de:
1. Registrarte o hacer login
2. El token se guarda en localStorage
3. El header Authorization tiene el token

## 📊 Comparación Antes/Después

| Aspecto | Antes | Ahora |
|---------|-------|-------|
| Servidores | 2 | 1 |
| Puertos | 3000, 5000 | 5034 (o configurable) |
| CORS | Siempre | Solo desarrollo |
| Inicio | `npm start` + `dotnet run` | Solo `dotnet run` |
| Deploy | 2 servicios | 1 servicio |
| MVC Pattern | No | ✓ Sí |
| Archivos estáticos | Node.js | ASP.NET |

## 🎯 Próximos Pasos

1. ✓ Ejecutar `setup.bat`
2. ✓ Esperar compilación React
3. ✓ Ejecutar `dotnet run`
4. ✓ Visitar http://localhost:5034
5. ✓ Registrarse y probar
6. ✓ Hacer cambios si es necesario
7. ✓ Ejecutar `npm run build` antes de producción

## 📚 Archivos de Referencia

- [README.md](README.md) - Guía completa
- [README_MVC_ARCHITECTURE.md](README_MVC_ARCHITECTURE.md) - Detalles técnicos
- [VERIFICATION_CHECKLIST.md](VERIFICATION_CHECKLIST.md) - Verificación

---

🎉 **¡Tu aplicación ahora sigue un patrón MVC auténtico con .NET Core + React integrado!**

# Arquitectura MVC Integrada - .NET Core + React

## Descripción
Esta aplicación sigue un **patrón MVC integrado** donde:
- **Models**: Definiciones de entidades en `Models/`
- **Views**: Componentes React compilados servidos como archivos estáticos
- **Controllers**: API RESTful en `Controllers/`

## Estructura del Proyecto

```
HotwheelsCollector/
├── Models/                 # Entidades de datos
├── Controllers/            # Controladores API REST
├── Services/               # Servicios de negocio
├── Data/                   # Contexto EF Core
├── DTOs/                   # Data Transfer Objects
├── wwwroot/                # Archivos estáticos (compilados de React)
├── ClientApp/              # Código fuente de React
└── Program.cs              # Configuración principal
```

## Configuración Inicial

### 1. Preparar el Cliente React

```bash
# Navegar a la carpeta del cliente
cd ClientApp

# Instalar dependencias
npm install

# Compilar para producción (se genera en wwwroot)
npm run build
```

### 2. Crear Proyecto de Migración (One-time)

```bash
# Crear migración inicial
dotnet ef migrations add InitialCreate

# Aplicar migraciones
dotnet ef database update
```

### 3. Ejecutar la Aplicación

```bash
# Modo desarrollo
dotnet run

# La aplicación estará disponible en:
# https://localhost:5001 (HTTPS)
# http://localhost:5000 (HTTP)
```

## API Endpoints

### Autenticación
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/login` - Login

### Hotwheels (Requiere autenticación)
- `GET /api/hotwheels` - Obtener todas las colecciones
- `GET /api/hotwheels/{id}` - Obtener una colección
- `POST /api/hotwheels` - Crear nuevas colecciones
- `PUT /api/hotwheels/{id}` - Actualizar colección
- `DELETE /api/hotwheels/{id}` - Eliminar colección

## Desarrollo

### Durante el desarrollo

**Terminal 1 - Backend .NET:**
```bash
dotnet watch run
```

**Terminal 2 - Frontend React (opcional, para hot-reload):**
```bash
cd ClientApp
npm start
```

> **Nota**: Configura CORS en `Program.cs` para `http://localhost:3000` durante desarrollo.

### Build para Producción

```bash
# 1. Compilar React a archivos estáticos
cd ClientApp
npm run build
# Esto genera archivos en ../wwwroot

# 2. Publicar aplicación .NET
cd ..
dotnet publish -c Release -o ./publish

# 3. La carpeta publish contiene todo listo para deployment
```

## Autenticación JWT

- Token válido por **24 horas**
- Se envía en header: `Authorization: Bearer <token>`
- Configurar en `appsettings.json`: `Jwt:Key`
- **IMPORTANTE**: Cambiar la clave secreta en producción

## Base de Datos

- **Motor**: SQLite (`hotwheels.db`)
- **Migraciones**: Usar `dotnet ef`
- **Contexto**: `ApplicationDbContext`

## Diferencias con Arquitectura Anterior

| Aspecto | Antes (Separado) | Ahora (MVC) |
|---------|-----------------|-----------|
| **Estructura** | API + SPA separados | Un proyecto .NET |
| **Servicio Estáticos** | Requería servidor Node.js | Servidos por ASP.NET |
| **CORS** | Necesario | Solo para desarrollo |
| **Deployment** | Dos servicios | Un único servicio |
| **MVC Pattern** | No implementado | Totalmente implementado |
| **Rendimiento** | Más solicitudes HTTP | Optimizado |

## Troubleshooting

### Error: "No se encuentran Controllers"
Verifica que el archivo esté en `HotwheelsCollector/Controllers/` y que `Program.cs` incluya `app.MapControllers()`

### Error: "Base de datos no se crea"
Ejecuta:
```bash
dotnet ef database update
```

### React no se carga en producción
Asegúrate de tener la carpeta `wwwroot/` con los archivos compilados:
```bash
npm run build
```

## Notas Importantes

✅ Esta arquitectura mantiene:
- Separación de responsabilidades (MVC pattern)
- Seguridad con JWT
- Base de datos relacional con EF Core
- Cliente React moderno
- Facilidad de deployment

⚠️ Para cambios en el cliente React:
1. Edita los archivos en `ClientApp/src/`
2. Ejecuta `npm run build` para compilar
3. Los cambios se reflejan automáticamente en `wwwroot/`

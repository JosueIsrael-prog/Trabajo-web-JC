<h1 align="center">🏎️ Hotwheels Collector</h1>

<p align="center">
  <strong>Aplicación MVC Integrada para Gestionar tu Colección de Hotwheels</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-%E2%9C%85%20COMPLETO-brightgreen?style=for-the-badge" alt="Estado del Proyecto">
  <img src="https://img.shields.io/badge/.NET-8.0-blueviolet?style=for-the-badge" alt="Versión .NET">
  <img src="https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge" alt="Versión React">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="Licencia">
</p>

---

## 📋 Índice

- [📖 Descripción del Proyecto](#-descripción-del-proyecto)
- [✨ Características](#-características)
- [🛠️ Tecnologías Utilizadas](#%EF%B8%8F-tecnologías-utilizadas)
- [⚙️ Requisitos Previos](#%EF%B8%8F-requisitos-previos)
- [🚀 Cómo Ejecutar el Proyecto](#-cómo-ejecutar-el-proyecto)
- [📁 Estructura del Proyecto](#-estructura-del-proyecto)
- [🔐 API Endpoints](#-api-endpoints)
- [💻 Desarrollo](#-desarrollo)
- [🐛 Solución de Problemas](#-solución-de-problemas)
- [👥 Personas Desarrolladoras](#-personas-desarrolladoras)
- [📝 Licencia](#-licencia)

---

## 📖 Descripción del Proyecto

**Hotwheels Collector** es una aplicación web moderna que permite a los usuarios gestionar y organizar su colección de vehículos Hotwheels. Construida con una **arquitectura MVC integrada**, combina .NET Core con React para proporcionar una experiencia de usuario fluida y moderna.

La aplicación implementa:
- ✅ Autenticación segura con JWT
- ✅ Gestión completa de colecciones (CRUD)
- ✅ Persistencia de datos con SQLite
- ✅ Interfaz moderna y responsiva con React
- ✅ Arquitectura escalable y mantenible

---

## ✨ Características

### 🔐 Autenticación
- `✓` Registro de nuevos usuarios
- `✓` Login seguro con JWT
- `✓` Contraseñas encriptadas con BCrypt
- `✓` Tokens con expiración de 24 horas

### 🏎️ Gestión de Colecciones
- `✓` Crear nuevas colecciones de Hotwheels
- `✓` Visualizar todas tus colecciones
- `✓` Actualizar información de colecciones
- `✓` Eliminar colecciones
- `✓` Registrar modelo, color, año y condición

### 📊 Datos Organizados
- `✓` Valor estimado de cada vehículo
- `✓` Fecha de adquisición
- `✓` Notas personalizadas
- `✓` Condición del vehículo (New, Mint, Excellent, Good, Fair, Poor)

### 🎨 Interfaz de Usuario
- `✓` Dashboard intuitivo
- `✓` Diseño responsivo
- `✓` Componentes reutilizables
- `✓` Navegación fluida

---

## 🛠️ Tecnologías Utilizadas

### Backend
![.NET Core](https://img.shields.io/badge/.NET%20Core-8.0-blueviolet?style=flat-square&logo=dotnet)
![Entity Framework](https://img.shields.io/badge/Entity%20Framework-Core-blue?style=flat-square)
![SQLite](https://img.shields.io/badge/SQLite-Database-lightblue?style=flat-square&logo=sqlite)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=flat-square)
![BCrypt](https://img.shields.io/badge/BCrypt-Password%20Hashing-green?style=flat-square)

### Frontend
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react)
![React Router](https://img.shields.io/badge/React%20Router-6.20-61dafb?style=flat-square)
![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5c2d91?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css3)

### Herramientas
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=flat-square&logo=git)
![VsCode](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=flat-square&logo=visualstudiocode)

---

## ⚙️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

```bash
# .NET SDK 8.0 o superior
dotnet --version  # Debe ser 8.0.0 o mayor

# Node.js 16+ y npm
node --version    # Debe ser 16.0.0 o mayor
npm --version     # Generalmente incluido con Node.js
```

Si no los tienes instalados:
- **[Descargar .NET SDK](https://dotnet.microsoft.com/download)**
- **[Descargar Node.js](https://nodejs.org/)**

---

## 🚀 Cómo Ejecutar el Proyecto

### Opción 1: Setup Automático (Recomendado)

Windows:
```bash
cd c:\ruta\HotwheelsCollector
.\setup.bat
```

Linux/Mac:
```bash
cd /ruta/HotwheelsCollector
chmod +x setup.sh
./setup.sh
```

El script realizará:
1. ✅ Verificación de requisitos
2. ✅ Restauración de dependencias .NET
3. ✅ Instalación de paquetes npm
4. ✅ Compilación de React
5. ✅ Creación de base de datos

### Opción 2: Setup Manual

**Paso 1:** Restaurar dependencias de .NET
```bash
dotnet restore
```

**Paso 2:** Instalar dependencias de React
```bash
cd ClientApp
npm install
cd ..
```

**Paso 3:** Compilar React
```bash
cd ClientApp
npm run build
cd ..
```

**Paso 4:** Crear base de datos
```bash
dotnet ef database update
```

**Paso 5:** Ejecutar la aplicación
```bash
dotnet run
```

### 🌐 Acceder a la Aplicación

Una vez ejecutada, abre tu navegador en:
- **Frontend**: [http://localhost:5034](http://localhost:5034)
- **API**: http://localhost:5034/api
- **Swagger UI**: http://localhost:5034/swagger

---

## 📁 Estructura del Proyecto

```
HotwheelsCollector/
│
├── 📄 Program.cs                      # Configuración principal
├── 📄 appsettings.json               # Configuración de la app
├── 📄 HotwheelsCollector.csproj      # Archivo del proyecto
│
├── 📁 Controllers/                    # Controladores API
│   ├── AuthController.cs             # Autenticación y registro
│   └── HotwheelsController.cs        # CRUD de colecciones
│
├── 📁 Models/                         # Entidades de datos
│   ├── User.cs                       # Modelo de Usuario
│   └── Hotwheels.cs                  # Modelo de Hotwheels
│
├── 📁 Services/                       # Servicios de negocio
│   └── JwtService.cs                 # Generación de tokens JWT
│
├── 📁 Data/                           # Acceso a datos
│   └── ApplicationDbContext.cs        # Contexto Entity Framework
│
├── 📁 DTOs/                           # Data Transfer Objects
│   ├── AuthResponse.cs               # Respuesta de autenticación
│   ├── HotwheelsDto.cs               # DTO de Hotwheels
│   ├── LoginRequest.cs               # Solicitud de login
│   └── RegisterRequest.cs            # Solicitud de registro
│
├── 📁 ClientApp/                      # Aplicación React
│   ├── 📄 package.json               # Dependencias npm
│   ├── 📁 public/
│   │   └── index.html                # HTML principal
│   └── 📁 src/
│       ├── 📁 components/            # Componentes reutilizables
│       ├── 📁 pages/                 # Páginas (Login, Register, Dashboard)
│       ├── 📁 services/              # Servicios API
│       ├── 📁 styles/                # Estilos CSS
│       ├── App.js                    # Componente principal
│       └── index.js                  # Punto de entrada
│
├── 📁 wwwroot/                        # Archivos estáticos compilados
│   ├── index.html                    # SPA compilado
│   └── static/                       # Assets compilados
│
├── 📁 Properties/
│   └── launchSettings.json            # Configuración de ejecución
│
└── 📁 Documentation/                  # Documentación adicional
    ├── README_MVC_ARCHITECTURE.md
    ├── MIGRATION_GUIDE.md
    └── VERIFICATION_CHECKLIST.md
```

---

## 🔐 API Endpoints

### 🟢 Endpoints Públicos (Sin autenticación)

#### Registro
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "string",
  "email": "user@example.com",
  "password": "string"
}
```

**Respuesta:**
```json
{
  "userId": 1,
  "username": "usuario",
  "email": "user@example.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "string",
  "password": "string"
}
```

---

### 🔵 Endpoints Protegidos (Requieren JWT Token)

**Header requerido:**
```
Authorization: Bearer <tu_token_aqui>
```

#### Obtener todas las colecciones
```http
GET /api/hotwheels
```

#### Obtener una colección específica
```http
GET /api/hotwheels/{id}
```

#### Crear nueva colección
```http
POST /api/hotwheels
Content-Type: application/json

{
  "name": "Ferrari Testarossa",
  "model": "Ferrari",
  "color": "Red",
  "year": 1984,
  "condition": "Mint",
  "estimatedValue": 150.50,
  "notes": "Edición especial",
  "acquisitionDate": "2024-01-15"
}
```

#### Actualizar colección
```http
PUT /api/hotwheels/{id}
Content-Type: application/json

{
  "name": "Ferrari Testarossa",
  "model": "Ferrari",
  "color": "Red",
  "year": 1984,
  "condition": "Mint",
  "estimatedValue": 150.50,
  "notes": "Edición especial",
  "acquisitionDate": "2024-01-15"
}
```

#### Eliminar colección
```http
DELETE /api/hotwheels/{id}
```

---

## 💻 Desarrollo

### Contribución de Características

**Con hot-reload (Recomendado):**

Terminal 1 - Backend (con auto-recompilación):
```bash
dotnet watch run
```

Terminal 2 - Frontend (con hot-reload):
```bash
cd ClientApp
npm start
```

> El frontend estará en `http://localhost:3000` y se conectará automáticamente al backend.

**Cambios en Base de Datos:**
```bash
# Crear nueva migracion
dotnet ef migrations add MiNombre

# Aplicar migracion
dotnet ef database update
```

### Build para Producción

```bash
# 1. Compilar React a archivos estáticos
cd ClientApp
npm run build
cd ..

# 2. Publicar aplicación .NET
dotnet publish -c Release -o ./publish

# 3. El contenido de 'publish' está listo para deployar
```

---

## 🐛 Solución de Problemas

| Problema | Solución |
|----------|----------|
| **"Base de datos no existe"** | Ejecuta: `dotnet ef database update` |
| **"Controllers no se mapean"** | Verifica que `Program.cs` tenga `app.MapControllers()` |
| **"React no carga en producción"** | Ejecuta: `cd ClientApp && npm run build` |
| **"Puerto 5034 en uso"** | Cambia puerto en `Properties/launchSettings.json` |
| **"Error CORS en desarrollo"** | Verifica CORS en `Program.cs` para `http://localhost:3000` |
| **"npm no encontrado"** | Descarga Node.js desde [nodejs.org](https://nodejs.org) |
| **"dotnet no encontrado"** | Descarga .NET Core desde [dotnet.microsoft.com](https://dotnet.microsoft.com) |

---

## 📖 Documentación Adicional

- 📚 [Guía de Arquitectura MVC](./README_MVC_ARCHITECTURE.md)
- 🔄 [Guía de Migración](./MIGRATION_GUIDE.md)
- ✅ [Checklist de Verificación](./VERIFICATION_CHECKLIST.md)
- 🚀 [Guía de Inicio Rápido](./QUICK_START.md)
- 📊 [Resumen de Refactorización](./COMPLETION_SUMMARY.md)

---

## 👥 Personas Desarrolladoras

| Nombre | Usuario GitHub | Rol |
|--------|---------------|-----|
| **Jouse Israel** | [@jouseisrael](https://github.com) | Desarrollador Principal |

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas, pero este es un proyecto educativo. Si deseas contribuir:

1. Fork el repositorio
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usar, modificar y distribuir este código libremente.

```
MIT License

Copyright (c) 2026 Hotwheels Collector

Se concede permiso, sin cargo, a cualquier persona que obtenga una copia
de este software y los archivos de documentación asociados (el "Software")...
```

Para más detalles, consulta el archivo [LICENSE](./LICENSE).

---

## 📞 Soporte

¿Encontraste un bug? ¿Tienes sugerencias? 

- 📧 **Email**: contacto@example.com
- 🐛 **Issues**: [Abre un issue](https://github.com)
- 💬 **Discussiones**: [Participa en discusiones](https://github.com)

---

## 🎯 Próximos Pasos

- [ ] Agregar autenticación con Google/Microsoft
- [ ] Sistema de calificaciones y reseñas
- [ ] Importar/exportar colecciones
- [ ] Historial de precios
- [ ] Mobile app (React Native)
- [ ] Dashboard con gráficas estadísticas

---

<p align="center">
  Hecho con ❤️ por <strong>Jouse Israel</strong>
</p>

<p align="center">
  <a href="#-índice">⬆ Volver al inicio</a>
</p>

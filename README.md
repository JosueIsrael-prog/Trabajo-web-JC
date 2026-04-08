<h1 align="center">🏎️ Hotwheels Collector</h1>

<p align="center">
  <strong>Aplicación web para gestionar y visualizar colecciones de autos a escala</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-yellow?style=for-the-badge&logo=github" alt="Estado del Proyecto">
  <img src="https://img.shields.io/badge/Version-1.0-blue?style=for-the-badge" alt="Versión del Proyecto">
  <img src="https://img.shields.io/badge/.NET-8.0-blueviolet?style=for-the-badge&logo=dotnet" alt="Versión .NET">
  <img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react" alt="Versión React">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="Licencia MIT">
</p>

---

## 📋 Contenido

* [Descripción del Proyecto](#-descripción-del-proyecto)
* [Estado del Proyecto](#-estado-del-proyecto)
* [Características y Demostración](#-características-y-demostración)
* [Tecnologías Utilizadas](#-tecnologías-utilizadas)
* [Requisitos Previos](#-requisitos-previos)
* [Instrucciones de Instalación y Uso](#-instrucciones-de-instalación-y-uso)
* [Estructura del Proyecto](#-estructura-del-proyecto)
* [Funcionalidades Principales](#-funcionalidades-principales)
* [Autor](#-autor)
* [Licencia](#-licencia)

---

## 📖 Descripción del Proyecto

**Hotwheels Collector** es una aplicación web fullstack moderna que permite a los coleccionistas de vehículos a escala gestionar, organizar y visualizar sus colecciones de manera intuitiva y profesional.

Desarrollada bajo una **arquitectura MVC completamente integrada**, combina la robustez de **.NET 8 Core** con la modernidad de **React** para proporcionar una experiencia de usuario excepcional, garantizando seguridad, rendimiento y escalabilidad.

### Objetivo Principal
Proporcionar una solución completa y user-friendly para que los coleccionistas de Hotwheels puedan:
- 🔐 Crear cuentas seguras con autenticación JWT
- 📊 Registrar cada pieza de su colección con detalles precisos
- 📈 Visualizar estadísticas de su colección
- 🎯 Acceder desde cualquier dispositivo a través del navegador

---

## 🚀 Estado del Proyecto

<h4 align="center">
  ✅ VERSIÓN 1.0 FUNCIONAL - En Desarrollo Activo
</h4>

El proyecto se encuentra en una **fase estable de producción** con todas las funcionalidades core implementadas y operativas. Se continúa trabajando en mejoras y nuevas características.

**Cambios y mejoras pendientes:**
- Gráficas avanzadas de colecciones
- Sistema de búsqueda y filtros avanzados
- Exportación de datos en múltiples formatos

---

## 🎯 Características y Demostración

### 🔐 Sistema de Autenticación

- `✅` Registro de nuevos usuarios con validaciones
- `✅` Login seguro mediante JWT (JSON Web Tokens)
- `✅` Encriptación de contraseñas con estándares de seguridad
- `✅` Tokens con expiración automática
- `✅` Validación de sesiones en tiempo real

### 🏎️ Gestión de Colecciones

- `✅` **Crear**: Registro completo de nuevas adquisiciones (modelo, color, año, condición)
- `✅` **Visualizar**: Dashboard interactivo con todas tus colecciones
- `✅` **Actualizar**: Modificar datos de vehículos existentes
- `✅` **Eliminar**: Gestión de inventario
- `✅` **Organizar**: Clasificación por estado de condición y fecha de adquisición

### 📊 Datos Organizados

- `✅` Información detallada de cada vehículo (modelo, color, año)
- `✅` Estimación de valor para cada pieza
- `✅` Registro de fecha de adquisición
- `✅` Condición del vehículo (New, Mint, Excellent, Good, Fair, Poor)
- `✅` Notas personalizadas para cada colección
- `✅` Validaciones automáticas de base de datos

### 🎨 Interfaz de Usuario

- `✅` Dashboard intuitivo y moderno
- `✅` Diseño completamente responsivo (móvil, tablet, desktop)
- `✅` Componentes React reutilizables y mantenibles
- `✅` Navegación fluida sin recargas de página
- `✅` Estilos modernos y profesionales con CSS3

---

## 🛠️ Tecnologías Utilizadas

### Backend

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| ![.NET Core](https://img.shields.io/badge/.NET%20Core-8.0-blueviolet?style=flat-square&logo=dotnet) | 8.0 | Framework principal |
| ![Entity Framework Core](https://img.shields.io/badge/Entity%20Framework-Core-blue?style=flat-square&logo=dotnet) | Última | ORM para base de datos |
| ![SQLite](https://img.shields.io/badge/SQLite-3-lightblue?style=flat-square&logo=sqlite) | 3 | Base de datos relacional |
| ![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=flat-square&logo=auth0) | - | Autenticación segura |
| ![C#](https://img.shields.io/badge/C%23-Language-239120?style=flat-square&logo=csharp) | 12 | Lenguaje de programación |

### Frontend

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| ![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat-square&logo=react) | 18.2.0 | Framework UI |
| ![React Router](https://img.shields.io/badge/React%20Router-6.20-61dafb?style=flat-square&logo=react) | 6.20 | Enrutamiento de páginas |
| ![Axios](https://img.shields.io/badge/Axios-HTTP%20Client-5c2d91?style=flat-square&logo=javascript) | Última | Cliente HTTP |
| ![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=flat-square&logo=css3) | 3 | Estilos y diseño |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript) | ES6+ | Lenguaje de programación |

### Herramientas y DevOps

| Herramienta | Propósito |
|-----------|----------|
| ![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=flat-square&logo=git) | Control de versiones |
| ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-Editor-007ACC?style=flat-square&logo=visualstudiocode) | Editor de código |
| ![npm](https://img.shields.io/badge/npm-Package%20Manager-CB3837?style=flat-square&logo=npm) | Gestor de paquetes |

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalado en tu sistema:

```bash
# .NET SDK 8.0 o superior
# Node.js 16.x o superior con npm
# Git para control de versiones
# Navegador web moderno (Chrome, Firefox, Edge, Safari)
```

**Versiones recomendadas:**
- **Node.js**: v18.x LTS o superior
- **.NET SDK**: 8.0 o superior
- **npm**: 9.x o superior

---

## 🚀 Instrucciones de Instalación y Uso

### ⚠️ IMPORTANTE: Ubicación del Proyecto

**Para evitar errores de permisos y rutas, el proyecto DEBE estar ubicado en:**

```
C:\Trabajo web JC
```

⚠️ No configures el proyecto en otras rutas, ya que causará errores de compilación y ejecución.

### 📥 Paso 1: Clonar el Repositorio

Abre tu terminal y ejecuta:

```bash
# Navega a la ubicación correcta
cd C:\

# Clona el repositorio (si aún no lo tienes)
git clone https://github.com/JosueIsrael-prog/Trabajo-web-JC.git

# Accede al directorio del proyecto
cd "Trabajo web JC"
```

### 🔧 Paso 2: Configurar las Dependencias

#### Backend (.NET)

```bash
# Restaurar paquetes de NuGet
dotnet restore

# Actualizar la base de datos (ejecutar migraciones)
dotnet ef database update
```

#### Frontend (React)

```bash
# Navega a la carpeta ClientApp
cd HotwheelsCollector\ClientApp

# Instala las dependencias de npm
npm install

# Regresa al directorio raíz del proyecto
cd ..\..
```

### ▶️ Paso 3: Ejecutar el Proyecto

#### Opción A: Ejecución Integrada (Recomendado)

Desde el directorio raíz `C:\Trabajo web JC\HotwheelsCollector`:

```bash
# Inicia el servidor .NET (esto también servirá la aplicación React)
dotnet run

# La aplicación estará disponible en:
# http://localhost:5034
```

#### Opción B: Ejecución Separada (Desarrollo)

En una terminal, desde `C:\Trabajo web JC\HotwheelsCollector`:

```bash
# Inicia el servidor backend
dotnet run
# Escuchará en http://localhost:5034/api
```

En otra terminal, desde `C:\Trabajo web JC\HotwheelsCollector\ClientApp`:

```bash
# Inicia el servidor de desarrollo de React
npm start
# Se abrirá automáticamente en http://localhost:3000
```

### 📱 Paso 4: Acceder a la Aplicación

Abre tu navegador web y ve a:

```
http://localhost:5034
```

### 🎬 Primeras Acciones

1. **Crear una cuenta**: Haz clic en "Registrarse"
2. **Iniciar sesión**: Ingresa tus credenciales
3. **Ver dashboard**: Explora tu dashboard personal
4. **Agregar colecciones**: Registra tu primer Hotwheels

---

## 📁 Estructura del Proyecto

```
Trabajo web JC/
├── HotwheelsCollector/          # Backend .NET Core
│   ├── Controllers/
│   │   ├── AuthController.cs    # Autenticación y autorización
│   │   └── HotwheelsController.cs # API REST para colecciones
│   ├── Models/
│   │   ├── User.cs              # Entidad de usuario
│   │   └── Hotwheels.cs         # Entidad de vehículos
│   ├── Data/
│   │   └── ApplicationDbContext.cs # Contexto de EF Core
│   ├── Services/
│   │   └── JwtService.cs        # Servicio de tokens JWT
│   ├── DTOs/                    # Objetos de transferencia de datos
│   ├── Migrations/              # Migraciones de base de datos
│   ├── ClientApp/               # Frontend React
│   │   ├── public/
│   │   │   └── index.html       # HTML principal
│   │   ├── src/
│   │   │   ├── components/      # Componentes React reutilizables
│   │   │   ├── pages/           # Páginas principales
│   │   │   ├── services/        # Servicios (API calls)
│   │   │   ├── styles/          # Estilos CSS
│   │   │   ├── App.js           # Componente raíz
│   │   │   └── index.js         # Punto de entrada
│   │   └── package.json         # Dependencias de npm
│   ├── wwwroot/                 # Archivos estáticos compilados
│   ├── appsettings.json         # Configuración de producción
│   ├── appsettings.Development.json # Configuración de desarrollo
│   ├── Program.cs               # Punto de entrada y configuración
│   └── HotwheelsCollector.csproj # Archivo de proyecto
│
└── README.md                    # Este archivo
```

---

## 🔑 Funcionalidades Principales

### 1. Autenticación y Seguridad

```
POST /api/auth/register     → Registrar nuevo usuario
POST /api/auth/login        → Iniciar sesión
GET  /api/auth/profile      → Obtener perfil del usuario (autenticado)
```

**Características de seguridad:**
- Contraseñas encriptadas con BCrypt
- Tokens JWT con expiración
- Validación de datos en servidor y cliente
- Almacenamiento seguro de tokens en localStorage

### 2. Gestión de Hotwheels (CRUD)

```
GET    /api/hotwheels           → Obtener todas las colecciones del usuario
GET    /api/hotwheels/{id}      → Obtener un vehículo específico
POST   /api/hotwheels           → Crear nuevo registro
PUT    /api/hotwheels/{id}      → Actualizar vehículo
DELETE /api/hotwheels/{id}      → Eliminar vehículo
```

### 3. Validaciones Automáticas

- ✅ Validación de emails únicos
- ✅ Validación de contraseñas (mínimo 6 caracteres)
- ✅ Validación de campos requeridos en formularios
- ✅ Validación de integridad de base de datos

---

## 🐛 Solución de Problemas

### ❌ Error: "Ruta no encontrada" o "Acceso denegado"

**Solución:**
```bash
# Asegúrate de estar en la ruta correcta
cd C:\Trabajo web JC\HotwheelsCollector

# Limpia la solución y reconstruye
dotnet clean
dotnet build
dotnet run
```

### ❌ Error: "npm: comando no encontrado"

**Solución:**
```bash
# Instala Node.js desde https://nodejs.org/
# Verifica la instalación
node --version
npm --version
```

### ❌ Error: "Cannot find module" en React

**Solución:**
```bash
# Navega a ClientApp
cd HotwheelsCollector\ClientApp

# Limpia dependencias
rmdir /s /q node_modules
del package-lock.json

# Reinstala
npm install
```

### ❌ Error: "Port 5034 already in use"

**Solución:**
```powershell
# Encuentra el proceso usando el puerto
netstat -ano | findstr :5034

# Termina el proceso (reemplaza PID por el número encontrado)
taskkill /PID <PID> /F

# Luego ejecuta de nuevo
dotnet run
```

### ❌ La base de datos no se actualiza

**Solución:**
```bash
# Ejecuta las migraciones
dotnet ef database update

# O resetea completamente
dotnet ef database drop --force
dotnet ef database update
```

---

## 👥 Autor

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/USERNAME?v=4" width="115" style="border-radius:50%"><br>
      <sub><b>Josué Israel Cevallos Barbero</b></sub><br>
      <a href="https://github.com/JosueIsrael-prog" title="GitHub">🔗 GitHub</a>
    </td>
  </tr>
</table>

**Contacto y redes:**
- 🏢 Desarrollador Full Stack
- 💼 Especializado en .NET Core y React
- 📧 Disponible para consultas y colaboraciones

---

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. 

Eres libre de:
- ✅ Utilizar el código comercialmente
- ✅ Modificar el código
- ✅ Distribuir el código
- ✅ Usarlo privadamente

**Con la condición de:**
- 📋 Incluir la licencia y aviso de copyright

Para más detalles, consulta el archivo [LICENSE](LICENSE) en el repositorio.

---

## 📚 Recursos Adicionales

- [Documentación de .NET Core 8](https://learn.microsoft.com/es-es/dotnet/core/)
- [Documentación de React](https://es.react.dev/)
- [Entity Framework Core](https://learn.microsoft.com/es-es/ef/core/)
- [JWT en .NET](https://learn.microsoft.com/es-es/azure/active-directory/develop/access-tokens)

---

<h4 align="center">Hecho con ❤️ por Josué Israel Cevallos Barbero</h4>

<p align="center">
  <strong>Si te fue útil, no olvides dejar una ⭐ en el repositorio</strong>
</p>
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

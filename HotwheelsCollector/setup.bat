@echo off
echo ===================================
echo Hotwheels Collector - Setup Script
echo ===================================
echo.

REM Check if .NET SDK is installed
dotnet --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: .NET SDK no está instalado
    echo Descárgalo desde: https://dotnet.microsoft.com/download
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js no está instalado
    echo Descárgalo desde: https://nodejs.org
    pause
    exit /b 1
)

echo ✓ .NET SDK instalado: 
dotnet --version

echo ✓ Node.js instalado:
node --version

echo.
echo [1/5] Restaurando dependencias de .NET...
dotnet restore
if errorlevel 1 (
    echo ERROR en dotnet restore
    pause
    exit /b 1
)

echo.
echo [2/5] Entrando a la carpeta ClientApp...
cd ClientApp

echo.
echo [3/5] Instalando dependencias de npm...
call npm install
if errorlevel 1 (
    echo ERROR en npm install
    pause
    exit /b 1
)

echo.
echo [4/5] Construyendo la aplicación React...
call npm run build
if errorlevel 1 (
    echo ERROR en npm run build
    pause
    exit /b 1
)

cd ..

echo.
echo [5/5] Preparando la base de datos...
dotnet ef database update
if errorlevel 1 (
    echo ERROR en dotnet ef database update
    echo Verifica que tengas Entity Framework Core Tools instalado:
    echo dotnet tool install --global dotnet-ef
    pause
    exit /b 1
)

echo.
echo ===================================
echo ✓ Setup completado exitosamente!
echo ===================================
echo.
echo Para iniciar la aplicación, ejecuta:
echo   dotnet run
echo.
echo La aplicación estará disponible en:
echo   http://localhost:5034
echo   https://localhost:7158
echo.
pause

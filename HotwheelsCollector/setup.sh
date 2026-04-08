#!/bin/bash
# Setup automático para HotwheelsCollector (Linux/Mac)

echo "===================================="
echo "Hotwheels Collector - Setup Script"
echo "===================================="
echo ""

# Check if .NET SDK is installed
if ! command -v dotnet &> /dev/null; then
    echo "ERROR: .NET SDK no está instalado"
    echo "Descárgalo desde: https://dotnet.microsoft.com/download"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado"
    echo "Descárgalo desde: https://nodejs.org"
    exit 1
fi

echo "✓ .NET SDK instalado: $(dotnet --version)"
echo "✓ Node.js instalado: $(node --version)"

echo ""
echo "[1/5] Restaurando dependencias de .NET..."
dotnet restore || { echo "ERROR en dotnet restore"; exit 1; }

echo ""
echo "[2/5] Entrando a la carpeta ClientApp..."
cd ClientApp

echo ""
echo "[3/5] Instalando dependencias de npm..."
npm install || { echo "ERROR en npm install"; exit 1; }

echo ""
echo "[4/5] Construyendo la aplicación React..."
npm run build || { echo "ERROR en npm run build"; exit 1; }

cd ..

echo ""
echo "[5/5] Preparando la base de datos..."
dotnet ef database update || { 
    echo "ERROR en dotnet ef database update"; 
    echo "Verifica que tengas Entity Framework Core Tools instalado:";
    echo "dotnet tool install --global dotnet-ef";
    exit 1; 
}

echo ""
echo "===================================="
echo "✓ Setup completado exitosamente!"
echo "===================================="
echo ""
echo "Para iniciar la aplicación, ejecuta:"
echo "  dotnet run"
echo ""
echo "La aplicación estará disponible en:"
echo "  http://localhost:5034"
echo ""

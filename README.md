
# Ridery Car API

Esta es una pequeña API en Node.js y Express para registrar vehículos y mostrarlos en consola. Incluye endpoints para crear vehículos, consultarlos y documentación interactiva con Swagger.


## Características
- Registro de vehículos
- Consulta de vehículos
- Documentación Swagger en `/api-docs`

## Arquitectura por capas
El proyecto está organizado en capas para facilitar el mantenimiento y la escalabilidad:

- **Rutas (`src/routes`)**: Definen los endpoints de la API y reciben las peticiones HTTP.
- **Controladores (`src/controllers`)**: Procesan la lógica de cada endpoint, validan datos y gestionan las respuestas.
- **Casos de uso (`src/useCases`)**: Implementan la lógica de negocio principal, como la creación y consulta de vehículos.

Esta separación permite que cada capa tenga una responsabilidad clara y facilita la extensión del proyecto.

## Requisitos
- Node.js >= 14
- npm

## Instalación
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Steiks10/ridery-car-api.git
   cd ridery-car-api
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Variables de entorno
Crea un archivo `.env` en la raíz con el siguiente contenido de ejemplo:
```
PORT=3000
SECRET_KEY=tu_clave_secreta
COMPANY_NAME= el nombre de tus compañías, 
ODOO_URL=tu_url_a_odoo
```

## Ejecución
Para iniciar el proyecto en modo desarrollo:
```bash
npm run dev
```
Para iniciar en modo producción:
```bash
npm start
```

## Dependencias principales
- express
- dotenv
- axios
- swagger-ui-express
- swagger-jsdoc
- nodemon (desarrollo)

## Endpoints principales
- `POST /vehicles` — Registrar un vehículo
- `GET /vehicles` — Consultar todos los vehículos
- `POST /vehicles/by_driver` — Consultar vehículos por driver

## Documentación
Accede a la documentación Swagger en:
```
http://localhost:3000/api-docs
```
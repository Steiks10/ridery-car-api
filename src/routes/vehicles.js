
// Importa Express y crea el router para las rutas de vehículos
const express = require('express');
const router = express.Router();

// Importa el controlador de vehículos
const vehicleController = require('../controllers/vehicleController');


/**
 * @swagger
 * /vehicles:
 *   post:
 *     summary: Crea un nuevo vehículo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               state_id:
 *                 type: string
 *                 default: "New" 
 *               model_id:
 *                 type: string
 *                 default: "A1"
 *               model_year:
 *                 type: string
 *                 default: "2023"
 *               color:
 *                 type: string
 *                 default: "Red"
 *               license_plate:
 *                 type: string
 *                 default: "ABC123"
 *               driver_id:
 *                 type: string
 *                 default: "54654654564"
 *               stock_location_id:
 *                 type: string
 *                 default: "Ridery/Stock"
 *     responses:
 *       201:
 *         description: Vehículo creado
 */
/**
 * Ruta para crear un vehículo
 * Recibe los datos por el body y los pasa al controlador
 * Devuelve el vehículo creado como respuesta
 */
router.post('/', async (req, res) => {
  console.log('POST /vehicles'); // Log para depuración
  console.log('DATA:', req.body); // Muestra los datos recibidos
  const vehicle = await vehicleController.createVehicle(req.body); // Llama al controlador
  console.log('Vehicle created:', vehicle); // Muestra el resultado
  res.status(201).json(vehicle); // Devuelve el vehículo creado
});



/**
 * @swagger
 * /vehicles/by_driver:
 *   post:
 *     summary: Obtiene todos los vehículos
 *     responses:
 *       200:
 *         description: Lista de vehículos
 */
router.post('/by_driver', (req, res) => {
  console.log('DATA:', req.body);
  console.log('GET /vehicles');
  res.status(200).json({ message: 'Succesfully Vehicle Showed', data: [] });
});



// Exporta el router para ser usado en el archivo principal
module.exports = router;

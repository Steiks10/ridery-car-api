const express = require('express');
const router = express.Router();
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
router.post('/', async (req, res) => {
  console.log('POST /vehicles');
  console.log('DATA:', req.body);
  const vehicle = await vehicleController.createVehicle(req.body);
  console.log('Vehicle created:', vehicle);
  console.log('AFTERRR')
  res.status(201).json(vehicle);
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


module.exports = router;

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
 *               model_id:
 *                 type: string
 *               sequence:
 *                 type: string
 *               model_year:
 *                 type: integer
 *               color:
 *                 type: string
 *               license_plate:
 *                 type: string
 *               driver_id:
 *                 type: string
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
  res.status(201)
});



/**
 * @swagger
 * /vehicles:
 *   get:
 *     summary: Obtiene todos los vehículos
 *     responses:
 *       200:
 *         description: Lista de vehículos
 */
router.get('/', (req, res) => {
  console.log('GET /vehicles');
});


/**
 * @swagger
 * /vehicles/{plate}:
 *   get:
 *     summary: Obtiene un vehículo por placa
 *     parameters:
 *       - in: path
 *         name: plate
 *         schema:
 *           type: string
 *         required: true
 *         description: Placa del vehículo
 *     responses:
 *       200:
 *         description: Vehículo encontrado
 *       404:
 *         description: Vehículo no encontrado
 */
router.get('/:plate', (req, res) => {
  console.log(`GET /vehicles/${req.params.plate}`);
});


// Update a vehicle
router.put('/:plate', (req, res) => {
  console.log(`PUT /vehicles/${req.params.plate}`);
});


// Delete a vehicle
router.delete('/:plate', (req, res) => {
  console.log(`DELETE /vehicles/${req.params.plate}`);
});

module.exports = router;

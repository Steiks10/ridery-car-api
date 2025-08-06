
// Controlador para la entidad Vehicle
const Vehicle = require('../models/vehicle');
const createVehicle = require('../useCases/createVehicle');

/**
 * Recibe los datos y llama al caso de uso para crear el vehículo
 * @param {Object} data - Datos del vehículo
 * @returns {Promise<Object>} - Vehículo creado
 */
exports.createVehicle = (data) => {
  console.log('DATA:', data);
  const vehicle = createVehicle(data);
  return vehicle;
};
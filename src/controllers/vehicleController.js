const Vehicle = require('../models/vehicle');
const createVehicle = require('../useCases/createVehicle');

exports.createVehicle = (data) => {
  console.log('DATA:', data);
  const vehicle = createVehicle(data);
  return vehicle;
};
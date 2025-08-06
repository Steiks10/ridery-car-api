
const axios = require('axios');
const VehicleDto = require('../dtos/vehicleDto');


function createVehicle(data) {
  // Usar DTO para filtrar y validar los datos
  const vehicleDto = new VehicleDto(data);

  const ODOO_URL = process.env.ODOO_URL;
  const AUTH_KEY = process.env.SECRET_KEY;
  const COMPANY_NAMES = process.env.COMPANY_NAME;

  const url = `${ODOO_URL}/ridery/vehicle`;
  const headers = {
    'Authorization': AUTH_KEY,
    'X-Company-Name': COMPANY_NAMES,
    'Content-Type': 'application/json'
  };

  // Realiza el POST
  return axios.post(url, vehicleDto, { headers })
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

module.exports = createVehicle;
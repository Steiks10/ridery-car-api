class VehicleDto {
  constructor({ state_id, model_id, model_year, color, license_plate, driver_id, stock_location_id }) {
    if (!state_id || !model_id || !model_year || !color || !license_plate || !driver_id) {
      throw new Error('Missing required fields');
    }
    this.state_id = state_id;
    this.model_id = model_id;
    this.model_year = model_year;
    this.color = color;
    this.license_plate = license_plate;
    this.driver_id = driver_id;
    if (stock_location_id) {
      this.stock_location_id = stock_location_id;
    }
  }
}

module.exports = VehicleDto;

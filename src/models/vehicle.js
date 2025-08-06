class Vehicle {
  constructor({ state_id, model_id, sequence, model_year, color, license_plate, driver_id, stock_location_id }) {
    this.state_id = state_id;
    this.model_id = model_id;
    this.sequence = sequence;
    this.model_year = model_year;
    this.color = color;
    this.license_plate = license_plate;
    this.driver_id = driver_id;
    this.stock_location_id = stock_location_id;
  }
}

module.exports = Vehicle;

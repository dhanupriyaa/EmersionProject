let vehicles = [];

module.exports = {
  getAll: () => vehicles,
  getById: (id) => vehicles.find(v => v.id === id),
  create: (vehicle) => {
    vehicles.push(vehicle);
    return vehicle;
  },
  update: (id, updatedVehicle) => {
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      vehicles[index] = { ...vehicles[index], ...updatedVehicle };
      return vehicles[index];
    }
    return null;
  },
  remove: (id) => {
    const index = vehicles.findIndex(v => v.id === id);
    if (index !== -1) {
      return vehicles.splice(index, 1)[0];
    }
    return null;
  }
};

const vehicleModel = require('../models/vehicleModel');
const { v4: uuidv4 } = require('uuid');

exports.getVehicles = (req, res) => {
  res.render('index', { vehicles: vehicleModel.getAll() });
};

exports.createVehicle = (req, res) => {
  const { modelName, vehicleName, price, image, desc, brand } = req.body;
  const newVehicle = {
    id: uuidv4(),
    modelName,
    vehicleName,
    price,
    image,
    desc,
    brand
  };
  vehicleModel.create(newVehicle);
  res.redirect('/');
};

exports.updateVehicle = (req, res) => {
  const id = req.params.id;
  const updated = vehicleModel.update(id, req.body);
  res.json(updated ? { success: true, updated } : { success: false });
};

exports.deleteVehicle = (req, res) => {
  const id = req.params.id;
  const deleted = vehicleModel.remove(id);
  res.json(deleted ? { success: true, deleted } : { success: false });
};

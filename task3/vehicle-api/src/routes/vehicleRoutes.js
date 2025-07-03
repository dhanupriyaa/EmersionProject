const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.get('/', vehicleController.getVehicles);
router.post('/vehicle', vehicleController.createVehicle);
router.put('/vehicle/:id', vehicleController.updateVehicle);
router.delete('/vehicle/:id', vehicleController.deleteVehicle);

module.exports = router;

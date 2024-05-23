// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');

// Ruta para crear un nuevo dispositivo
router.post('/', deviceController.createDevice);

// Ruta para obtener todos los dispositivos del usuario
router.get('/', deviceController.getUserDevices);

// Ruta para eliminar un dispositivo
router.delete('/:id', deviceController.deleteDevice);

module.exports = router;
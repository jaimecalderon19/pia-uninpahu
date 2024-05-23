// controllers/deviceController.js
const Device = require('../models/device');

// Controlador para crear un nuevo dispositivo
exports.createDevice = async (req, res) => {
  try {
    const { name, description, type, image, owner } = req.body;

    const newDevice = new Device({
      name,
      description,
      type,
      owner,
      image
    });

    const nuvodevice = await newDevice.save();

    res.status(201).json({ message: 'Dispositivo creado exitosamente', data: nuvodevice });
  } catch (error) {
    console.error('Error al crear dispositivo:', error);
    res.status(500).json({ message: 'Hubo un error al crear el dispositivo' });
  }
};

// Controlador para obtener todos los dispositivos de un usuario
exports.getUserDevices = async (req, res) => {
    try {
      const { user_id } = req.query; // Accede al ID del usuario desde req.query en lugar de req.body
      
      const devices = await Device.find({ owner: user_id });
      
      res.json(devices);
    } catch (error) {
      console.error('Error al obtener dispositivos del usuario:', error);
      res.status(500).json({ message: 'Hubo un error al obtener los dispositivos del usuario' });
    }
  };
  

// Controlador para eliminar un dispositivo
exports.deleteDevice = async (req, res) => {
  try {
    const deviceId = req.params.id;
    await Device.findByIdAndDelete(deviceId);

    res.json({ message: 'Dispositivo eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar dispositivo:', error);
    res.status(500).json({ message: 'Hubo un error al eliminar el dispositivo' });
  }
};

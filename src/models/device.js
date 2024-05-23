// models/Device.js
const { Schema, model } = require('mongoose');

const DeviceSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ['Arduino', 'ESP32', 'Raspberry Pi', 'Otro'], default: 'Otro' },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Referencia al propietario
  image: { type: String, required: true }, // Ruta de la imagen
  createdAt: { type: Date, default: Date.now }
});

module.exports = model('Device', DeviceSchema);

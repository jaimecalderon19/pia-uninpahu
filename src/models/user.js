// models/User.js
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  cedula: { type: Number, required: true }, 
  password: { type: String, required: true }
}, { timestamps: true });

module.exports = model('User', UserSchema);

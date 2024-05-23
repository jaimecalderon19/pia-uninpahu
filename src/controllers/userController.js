// controllers/userController.js
const User = require('../models/user');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un usuario nuevo
exports.createUser = async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    cedula: req.body.cedula,
    password: req.body.password
  });
  

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }

    if (req.body.name != null) {
      user.name = req.body.name;
    }
    if (req.body.email != null) {
      user.email = req.body.email;
    }
    if (req.body.cedula != null) {
      user.cedula = req.body.cedula;
    }
    if (req.body.password != null) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }

    await user.remove();
    res.json({ message: 'Deleted User' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.login = async (req, res) => {
  const { cedula, password } = req.body;
console.log(req.body);
  try {
    // Buscar usuario por cédula
    const user = await User.findOne({ cedula });

    // Verificar si el usuario existe
    if (!user) {
    console.log('usuario noi encontrado');
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    if (user.password !== password) {
    console.log('password no coincide');
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son válidas, enviar una respuesta exitosa
    res.json({ message: 'Inicio de sesión exitoso', user_id: user.id });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
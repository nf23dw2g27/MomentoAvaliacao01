const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");
// eslint-disable-next-line no-undef
const secretKey = process.env.JWT_SECRET || 'chave'; // Use uma variável de ambiente para a chave secreta

exports.register = async (req, res) => {
  try {
    const { username, password, email, telemovel, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      username,
      password: hashedPassword,
      email,
      telemovel,
      firstName,
      lastName,
    });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.user.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' }); //
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ message: "El. paštas jau naudojamas" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword
  });

  const token = generateToken(user._id);

  res.status(201).json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    },
    token
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Neteisingi prisijungimo duomenys" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ message: "Neteisingi prisijungimo duomenys" });
  }

  const token = generateToken(user._id);

  res.json({
    user: {
      id: user._id,
      name: user.name,
      email: user.email
    },
    token
  });
};

module.exports = {
  register,
  login
};
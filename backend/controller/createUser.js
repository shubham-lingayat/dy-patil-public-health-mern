const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, phone, email, level, programs, state, city } = req.body;

    if (!name || !phone || !email || !level || !programs || !state || !city) {
      return res.status(400).json({ status: 400, message: "Please fill all fields" });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ status: 400, message: "Email already exists" });
    }

    // Check if phone number already exists
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(409).json({ status: 409, message: "Phone number already exists" });
    }

    // Validate email format (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ status: 400, message: "Enter a valid email" });
    }

    // Validate phone number (basic 10-digit check)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ status: 400, message: "Enter a valid phone number" });
    }

    // Create new user
    const user = await User.create({ name, phone, email, level, programs, state, city });

    return res.status(200).json({ status: 200, message: "User created successfully", data: user });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ status: 500, message: "Internal Server Error" });
  }
};

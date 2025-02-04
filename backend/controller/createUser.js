const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, phone, email, level, programs, state, city } = req.body;
    if (!name || !phone || !email || !level || !programs || !state || !city) {
      console.log("not all fields...");
      console.log(name, phone, email, level, programs, state, city);
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await User.create({
      name,
      phone,
      email,
      level,
      programs,
      state,
      city,
    });
    return res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

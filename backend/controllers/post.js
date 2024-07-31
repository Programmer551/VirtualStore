const Users = require("../model/UserSchema");

const bcrypt = require("bcrypt");

require("dotenv").config();
const createUser = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      res
        .json({
          success: false,
          message: "Provide All Details",
        })
        .status(400);
    }
    const User = await Users.find({ email });
    const user = User.find((user) => user.name == name);
    if (user) {
      res.json({
        success: false,
        message: "User Already Exists",
      });
      return;
    }
    const newPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({ name, password: newPassword, email });
    if (!newUser) {
      res
        .json({
          success: false,
          message: "User was not created",
        })
        .status(500);
      return;
    }
    res
      .json({
        success: true,
        message: "User created Successfully",
        user: newUser,
      })
      .status(201);
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error }).status(404);
  }
};
module.exports = {
  createUser,
};
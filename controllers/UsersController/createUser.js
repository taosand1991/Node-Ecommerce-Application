const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

module.exports = async function (req, res) {
  let admin = false;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const password = req.body.password;
  const gender = req.body.gender;

  if (email === "taofeekdboy@yahoo.com") admin = true;

  const user = await User.findOne({ where: { email: email } });
  try {
    if (user)
      return res.status(400).json({ message: "user already exists!!!!" });
    const userPayload = {
      email,
      firstName,
      lastName,
      gender,
      admin,
    };
    const hash = await bcrypt.hash(password, (saltRounds = 10));
    const token = await jwt.sign(userPayload, "secret", { expiresIn: "1h" });
    return res
      .status(200)
      .json({ message: "user has been created succesfully", token: token });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

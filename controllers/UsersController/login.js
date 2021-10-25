const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../../models/User");

module.exports = async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  try {
    let user = await User.findOne({ where: { email: email } });
    if (user) {
      const hashedPassword = await bcrypt.compare(password, user.password);
      const payload = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        admin: user.admin,
        id: user.id,
      };
      if (hashedPassword) {
        const token = jwt.sign(payload, "secret", { expiresIn: "1h" });
        user.token = token;
        await user.save();
        const userObject = {
          firstName: user.firstName,
          lastName: user.lastName,
          gender: user.gender,
          token: user.token,
        };
        return res
          .status(200)
          .json({ message: "login successful", user: userObject });
      } else {
        return res
          .status(400)
          .json({ message: "Your email or password is incorrect" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "your email or password is incorrect" });
    }
  } catch (error) {
    return res.status(200).json(error.message);
  }
};

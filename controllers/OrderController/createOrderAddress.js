const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    const userOrder = await User.findByPk(user.id);
    const userProfile = await userOrder.createProfile(req.body);
    return res
      .status(201)
      .json({ message: "address created", userProfile: userProfile });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

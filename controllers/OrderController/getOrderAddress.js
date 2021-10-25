const Profile = require("../../models/Profile");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    const profile = await Profile.findOne({
      where: { user_id: user.id },
      include: {
        model: User,
        as: "user",
      },
    });
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

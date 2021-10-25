const CartItem = require("../../models/CartItem");
const jwt = require("jsonwebtoken");
const Product = require("../../models/Product");

module.exports = async function (req, res) {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    if (user) {
      const userCart = await CartItem.findAll({
        where: { user_id: user.id },
        include: {
          model: Product,
          as: "product",
        },
        order: [["id", "ASC"]],
      });
      let quantity = 0;
      for (let i = 0; i < userCart.length; i++) {
        quantity += userCart[i].quantity;
      }
      return res.status(200).json({ quantity: quantity, userCart: userCart });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

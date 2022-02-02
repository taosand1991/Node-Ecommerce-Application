const OrderItem = require("../../models/OrderItem");
const CartItem = require("../../models/CartItem");
const Product = require("../../models/Product");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    const order = await OrderItem.findOne({
      where: { user_id: user.id, ordered: false },
    });
    const userOrder = await order.getCartItems({
      joinTableAttributes: [],
      include: [
        {
          model: Product,
          as: "product",
        },
      ],
    });
    return res.status(200).json(userOrder);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

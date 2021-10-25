const CartItem = require("../../models/CartItem");
const Product = require("../../models/Product");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const cartId = req.params.id;
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    if (user) {
      const cart = await CartItem.findByPk(cartId);
      if (cart) {
        cart.quantity++;
        await cart.save();
        return res.status(200).json("quantity updated");
      } else return res.status(400).json("cart  could not be found!!!");
    } else return res.status(400).json("this is an anonymous user");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

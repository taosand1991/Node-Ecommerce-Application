const CartItem = require("../../models/CartItem");
const jwt = require("jsonwebtoken");

module.exports = async function (req, res) {
  const cartId = req.params.id;
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const user = await jwt.verify(token, "secret");
    if (user) {
      const cart = await CartItem.findByPk(cartId);
      if (cart) {
        if (cart.quantity <= 1) {
          cart.destroy();
          return res.status(200).json("product has been removed from the cart");
        }
        console.log(cart);
        cart.quantity--;
        await cart.save();
        return res.status(200).json("quantity updated");
      } else return res.status(400).json("cart  could not be found!!!");
    } else return res.status(400).json("this is an anonymous user");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

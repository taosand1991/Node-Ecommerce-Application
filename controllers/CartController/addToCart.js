const CartItem = require("../../models/CartItem");
const User = require("../../models/User");
const OrderItem = require("../../models/OrderItem");

const jwt = require("jsonwebtoken");
const Product = require("../../models/Product");

module.exports = async function (req, res) {
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const product = await Product.findByPk(req.body.productId);
    const user = await jwt.verify(token, "secret");
    if (product) {
      let [cart, created] = await CartItem.findOrCreate({
        where: {
          user_id: user.id,
          product_id: product.id,
        },
      });
      if (!created) {
        cart.quantity++;
        await cart.save();
        const cart_2 = await CartItem.findOne({
          where: { user_id: user.id, product_id: product.id },
          include: {
            model: Product,
            as: "product",
          },
        });
        return res.status(200).json({ carts: cart_2 });
      }
      const order = await OrderItem.findOne({
        where: { user_id: user.id, ordered: false },
      });
      if (!order || order === null) {
        const newOrder = await OrderItem.create({
          user_id: user.id,
          ordered: false,
        });
        const orderItem = await newOrder.hasCartItem(cart);
        if (!orderItem) {
          await newOrder.addCartItem(cart);
        }
      } else {
        const orderItem = await order.hasCartItem(cart);
        if (!orderItem) {
          await order.addCartItem(cart);
        }
      }
      return res.status(200).json({ carts: cart });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const Product = require("../../models/Product");
const Category = require("../../models/Category");

module.exports = async function (req, res) {
  try {
    const products = await Product.findAll({
      include: {
        model: Category,
      },
    });
    return res.status(200).json({ products: products });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

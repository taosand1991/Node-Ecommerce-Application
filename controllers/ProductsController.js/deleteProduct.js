const Product = require("../../models/Product");

module.exports = async function (req, res) {
  try {
    const product = await Product.findOne({ where: { slug: req.params.slug } });
    if (!product)
      return res.status(400).json("there is no named product in the store");
    product.destroy();
    return res.status(204).json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const Category = require("../../models/Category");
const Product = require("../../models/Product");

module.exports = async function (req, res) {
  try {
    const products = await Category.findOne({
      where: { slug: req.params.slug },
      include: {
        model: Product,
        as: "products",
      },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

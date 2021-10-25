const Product = require("../../models/Product");

module.exports = async function (req, res) {
  const productObject = {
    name: req.body.name,
    description: req.body.description,
    stock: Number(req.body.stock),
    CategoryId: req.body.CategoryId,
    price: Number(req.body.price),
    image: req.file.originalname,
  };
  try {
    await Product.create(productObject);
    return res
      .status(200)
      .json({ message: "product has been added to the store" });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

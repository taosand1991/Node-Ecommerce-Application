const Category = require("../../models/Category");

module.exports = async function (req, res) {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json(error);
  }
};

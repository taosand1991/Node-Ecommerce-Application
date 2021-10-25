const Category = require("../../models/Category");

module.exports = async function (req, res) {
  const name = req.body.name;
  try {
    const getName = await Category.findOne({ where: { name: name } });
    if (getName) {
      return res.status(400).json("category name has been created before");
    }
    await Category.create(req.body);
    return res.status(201).json("catgory has been created");
  } catch (error) {
    return res.status(400).json(error);
  }
};

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize folder/sequelize");

const Product = require("./Product");

class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    slug: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  {
    modelName: "Category",
    sequelize: sequelize,
  }
);

module.exports = Category;

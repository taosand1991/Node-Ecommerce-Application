const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize folder/sequelize");

const Category = require("./Category");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      get() {
        return parseFloat(this.getDataValue("price"));
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    image: {
      type: DataTypes.STRING(400),
    },
    slug: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  {
    defaultScope: {
      include: { model: Category },
      attributes: { exclude: "CategoryId" },
    },
    sequelize: sequelize,
  }
);

Product.belongsTo(Category, {
  onDelete: "SET NULL",
  onUpdate: "SET NULL",
});

Category.hasMany(Product, {
  as: "products",
  onDelete: "CASCADE",
  onUpdate: "SET NULL",
});

module.exports = Product;

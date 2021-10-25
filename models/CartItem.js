const sequelize = require("../sequelize folder/sequelize");
const { DataTypes, Model } = require("sequelize");
const Product = require("./Product");
const User = require("./User");

class CartItem extends Model {
  async getTotal() {
    const { price } = await Product.findByPk(this.product_id);
    return parseFloat(price) * this.quantity;
  }
}

CartItem.init(
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    ordered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize, defaultScope: { include: { model: Product } } }
);

CartItem.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
CartItem.belongsTo(Product, {
  as: "product",
  foreignKey: "product_id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.hasMany(CartItem, { constraints: false, foreignKey: "product_id" });
User.hasMany(CartItem, {
  constraints: false,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = CartItem;

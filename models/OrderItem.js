const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize folder/sequelize");
const CartItem = require("./CartItem");
const User = require("./User");

class OrderItem extends Model {}

OrderItem.init(
  {
    ordered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { sequelize }
);

CartItem.belongsToMany(OrderItem, { through: "Orders", constraints: false });
OrderItem.belongsToMany(CartItem, { through: "Orders", constraints: false });

OrderItem.belongsTo(User, {
  constraints: false,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasMany(OrderItem, {
  constraints: false,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = OrderItem;

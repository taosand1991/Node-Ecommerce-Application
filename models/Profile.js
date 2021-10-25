const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize folder/sequelize");
const User = require("./User");

class Profile extends Model {}

Profile.init(
  {
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipCode: {
      type: DataTypes.INTEGER,
    },
    phoneNumber: {
      type: DataTypes.BIGINT(12),
    },
  },
  { sequelize }
);

Profile.belongsTo(User, {
    as: 'user'  ,
  constraints: false,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
User.hasOne(Profile, {
  as: 'profile',  
  constraints: false,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = Profile;

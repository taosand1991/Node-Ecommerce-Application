const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("lithuania", "postgres", "police", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;

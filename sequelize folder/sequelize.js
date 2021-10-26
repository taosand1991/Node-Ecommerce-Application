const { Sequelize } = require("sequelize");
const app = require("express")();

const host = process.env.RDS_HOSTNAME;
const database = process.env.RDS_DATABASE;
const username = process.env.RDS_USERNAME;
const password = process.env.RDS_PASSWORD;
const port = process.env.PORT;

const env = app.settings.env;
console.log(env);

let sequelize;

if (env === "development") {
  sequelize = new Sequelize("lithuania", "postgres", "police", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });
} else {
  sequelize = new Sequelize(database, username, password, {
    host: host,
    dialect: "postgres",
    logging: false,
  });
}

module.exports = sequelize;

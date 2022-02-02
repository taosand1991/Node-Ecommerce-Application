const { Sequelize } = require("sequelize");

const host = process.env.RDS_HOSTNAME;
const database = process.env.RDS_DB_NAME || "ebdb";
const username = process.env.RDS_USERNAME;
const password = process.env.RDS_PASSWORD || "police1991";


// console.log(host, database, username, password, port);

let sequelize;

if (process.env.NODE_ENVIRONMENT !== "development") {
  sequelize = new Sequelize(
    `postgres:${username}:${password}@${host}:5432/${database}`
  );
} else {
  sequelize = new Sequelize("lithuania", "postgres", "police", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });
}

module.exports = sequelize;

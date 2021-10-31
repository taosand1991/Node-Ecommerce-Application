const { Sequelize } = require("sequelize");
const app = require("express")();

const host = process.env.RDS_HOSTNAME;
const database = process.env.RDS_DB_NAME || "ebdb";
const username = process.env.RDS_USERNAME;
const password = process.env.RDS_PASSWORD || "police1991";
const port = process.env.PORT;

let sequelize;

// if (env === "development") {
//   sequelize = new Sequelize("lithuania", "postgres", "police", {
//     host: "localhost",
//     dialect: "postgres",
//     logging: false,
//   });
// } else {
//   // sequelize = new Sequelize(database, username, password, {
//   //   host: host,
//   //   dialect: "postgres",
//   //   logging: false,
//   // });
//   sequelize = new Sequelize(
//     `postgres:${username}:${password}@${host}:5432/${database}`
//   );
// }
if (process.env.NODE_ENVIRONMENT === "development") {
  sequelize = new Sequelize("lithuania", "postgres", "police", {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  });
}

if (process.env.PRODUCTION_ENVIRONMENT === "production") {
  sequelize = new Sequelize(
    `postgres:${username}:${password}@${host}:5432/${database}`
  );
}

module.exports = sequelize;

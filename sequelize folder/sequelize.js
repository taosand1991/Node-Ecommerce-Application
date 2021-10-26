const { Sequelize } = require("sequelize");
const app = require("express")();

// const host = process.env.RDS_HOSTNAME;
// const database = ;
// const username = process.env.RDS_USERNAME;
// const password = process.env.RDS_PASSWORD;
// const port = process.env.PORT

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
  sequelize = new Sequelize(
    "postgres:https://us-west-2.console.aws.amazon.com/rds/home?region=us-west-2#dbinstances:id=aa1dtgv15kjrn17"
  );
}

module.exports = sequelize;

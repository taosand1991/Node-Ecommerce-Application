const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).send(process.env.PRODUCTION_ENVIRONMENT);
});

module.exports = route;

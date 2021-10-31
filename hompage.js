const route = require("express").Router();
const app = require("express")();

route.get("/", (req, res) => {
  res.status(200).send(app.settings.env);
});

module.exports = route;

const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).send("welcome to my node project");
});

module.exports = route;

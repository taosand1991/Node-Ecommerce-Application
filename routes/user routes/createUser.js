const route = require("express").Router();

const createUser = require("../../controllers/UsersController/createUser");
const loginUser = require("../../controllers/UsersController/login");

route.post("/create", createUser);
route.post("/login", loginUser);

module.exports = route;

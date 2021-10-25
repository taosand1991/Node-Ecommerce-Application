const route = require("express").Router();

const createCategory = require("../../controllers/CategoryController/createCategory");
const getCategories = require("../../controllers/CategoryController/getCategory");
const getProducts = require("../../controllers/CategoryController/getProductsCategory");

route.post("/create", createCategory);
route.get("/list", getCategories);
route.get("/:slug", getProducts);

module.exports = route;

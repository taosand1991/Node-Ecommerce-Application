const route = require("express").Router();
const addToCart = require("../../controllers/CartController/addToCart");
const cartQuantity = require("../../controllers/CartController/cartQuantity");
const increaseCart = require("../../controllers/CartController/increaseCart");
const decreaseCart = require("../../controllers/CartController/decreaseCart");

route.post("/add", addToCart);
route.get("/cart_quantity", cartQuantity);
route.get("/increase/:id", increaseCart);
route.get("/decrease/:id", decreaseCart);

module.exports = route;

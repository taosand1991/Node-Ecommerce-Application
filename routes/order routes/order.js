const route = require("express").Router();

const createOrder = require("../../controllers/OrderController/createOrder");
const createOrderAddress = require("../../controllers/OrderController/createOrderAddress");
const getOrderAddress = require("../../controllers/OrderController/getOrderAddress");
const orderPayment = require("../../controllers/OrderController/orderPayment");

route.post("/create", createOrder);
route.post("/create-address", createOrderAddress);
route.get("/get-address", getOrderAddress);
route.post("/create-payment-intent", orderPayment);

module.exports = route;

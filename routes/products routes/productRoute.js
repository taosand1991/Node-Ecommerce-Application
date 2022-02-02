const route = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const createProduct = require("../../controllers/ProductsController.js/createProduct");
const getProducts = require("../../controllers/ProductsController.js/getProducts");
const deleteProduct = require("../../controllers/ProductsController.js/deleteProduct");
const filterProducts = require("../../controllers/ProductsController.js/filterProducts");

route.post("/create", upload.single("image"), createProduct);
route.get("/list-products", getProducts);
route.get("/delete/:slug", deleteProduct);
route.post("/filter-products", filterProducts);

module.exports = route;

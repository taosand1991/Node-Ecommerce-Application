const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const path = require("path");
const sequelize = require("./sequelize folder/sequelize");
const PORT = 5000;

const User = require("./models/User");
const Product = require("./models/Product");
const Category = require("./models/Category");
const CartItem = require("./models/CartItem");
const Profile = require("./models/Profile");
const OrderItem = require("./models/OrderItem");

app.use("/", require("./hompage"));
sequelize
  .authenticate()
  .then(() => console.log("server connected succesfully"))
  .catch((error) => {
    console.log(error);
  });

sequelize
  .sync({ alter: true })
  .then(() => console.log("DB has been synchronized"))
  .catch((error) => console.log(error));

Category.sync({ alter: true });

Product.sync({ alter: true });

User.sync({ alter: true });

Profile.sync({ alter: true });

// OrderItem.sync({ alter: true });

CartItem.sync({ alter: true })
  .then(() => console.log("cart table created"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT || 5000, () => {
  console.log(`listening on port ${app.get("port")}`);
});

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/users", require("./routes/user routes/createUser"));
app.use("/products", require("./routes/products routes/productRoute"));
app.use("/categories", require("./routes/category routes/categoryRoute"));
app.use("/cart", require("./routes/cart routes/cart"));
app.use("/order", require("./routes/order routes/order"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

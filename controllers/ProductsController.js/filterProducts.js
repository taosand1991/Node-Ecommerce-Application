const Product = require("../../models/Product");
const { Op } = require("sequelize");

module.exports = async function (req, res) {
  const operation = req.body.filterValue;
  console.log(operation);
  try {
    if (operation == 1) {
      const products = await Product.findAll({
        where: {
          price: {
            [Op.lt]: 50,
          },
        },
      });
      return res.status(200).json(products);
    } else if (operation == 2) {
      const products = await Product.findAll({
        where: {
          price: {
            [Op.and]: {
              [Op.gt]: 50,
              [Op.lte]: 200,
            },
          },
        },
      });
      return res.status(200).json(products);
    } else {
      const products = await Product.findAll({
        where: {
          price: {
            [Op.gt]: 200,
          },
        },
      });
      return res.status(200).json(products);
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
  //   try {
  //     switch (operation) {
  //       case 1:
  //         let products = await Product.findAll({
  //           where: {
  //             price: {
  //               [Op.lt]: 50,
  //             },
  //           },
  //         });
  //         return res.status(200).json(products);
  //       case 2:
  //         products = await Product.findAll({
  //           where: {
  //             price: {
  //               [Op.and]: {
  //                 [Op.gt]: 50,
  //                 [Op.lte]: 200,
  //               },
  //             },
  //           },
  //         });
  //         return res.status(200).json(products);
  //       case 3:
  //         products = await Product.findAll({
  //           where: {
  //             price: {
  //               [Op.gt]: 200,
  //             },
  //           },
  //         });
  //         return res.status(200).json(products);
  //     }
  //   } catch (error) {
  //     return res.status(400).json(error.message);
  //   }
};

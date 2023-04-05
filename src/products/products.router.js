const router = require('express').Router()

//! const express = require('express')
//! const router = express.Router()

const productServices = require("./products.services");

router.route("/")
  .get(productServices.getAllProducts)
  .post(productServices.postNewProduct);

router.route("/:id")
  .get(productServices.getProductById)
  .patch(productServices.patchProduct)
  .delete(productServices.deleteProduct);




module.exports = router
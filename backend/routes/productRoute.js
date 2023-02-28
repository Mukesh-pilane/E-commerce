const express = require('express');
const {getAllProducts, createProducts} = require("../controllers/productControllers")
const router = express.Router()


router.route("/products").get(getAllProducts)
router.route("/products/new").post(createProducts)


module.exports = router
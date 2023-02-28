const Product = require("../models/productModels")

//create product - admin

exports.createProducts = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success:true,
    product
  })
}

exports.getAllProducts = (req, res)=>{
  return res.status(200).json({message: 'fine'})
}


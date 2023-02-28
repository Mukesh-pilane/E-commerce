const Product = require("../models/productModels")

exports.getAllProducts = (req, res)=>{
  return res.status(200).json({message: 'fine'})
}


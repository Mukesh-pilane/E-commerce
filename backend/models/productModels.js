const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name:{
		type:String,
		required: [true, "Please Enter Product Name"],
		trim:true
	},
	description:{
		type:String,
		required: [true, "Please Enter Product Description"]
	},
	price:{
		type:Number,
		required: [true, "Please Enter Product Price"],
		maxLength: [7, "Price Can't Exceed 8 Digits"]
	},
	rating:{
		type:Number,
		default: 0
	},
	images:[{
		public_id:{
		type:String,
		required:true
		},
		url:{
			type:String,
			required:true
		}
	}],
	category:{
		type:String,
		required:[true, "Please Enter Product Category"]
	},
	Stock:{
		type: Number,
		required: [true, "Please Enter Product Stock"],
		maxLength:[4, "Stock Can't Exceed 4 Digits"],
		default:1
	},
	noOfReveiws:{
		type:Number,
		default:0
	},
	reveiws:[{
		name:{
			type:String,
			required:true
		},
		rating:{
			type:Number,
			required:true
		},
		comment:{
			type:String,
			required:true
		}
	}],
	createAt:{
		type:Date,
		default:Date.now()
	}
})

module.exports = mongoose.model("Product", productSchema)

const mongoose = require("mongoose");

const { DB_URI } = process.env;

exports.connect = () => {
mongoose.set('strictQuery', true);
	mongoose.connect(DB_URI,{
		  useNewUrlParser: true,
	      useUnifiedTopology: true,
	      })
	      .then((data)=>{
	      	console.log(`Mongodb conected to server : ${data.connection.host}`);
	      })
	      .catch((error)=>{
	      	console.log("database connection failed.exiting now...");
	      	console.error(error);
	      	process.exit(1);
	      })
}

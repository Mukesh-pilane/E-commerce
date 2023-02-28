const app  = require("./app");
const dotenv = require("dotenv")
dotenv.config({path: "backend/config/config.env"})
require("./config/databaseConfig").connect();
app.listen(process.env.PORT,() =>{
  console.log(`server is listening on port: ${process.env.PORT}`)
})
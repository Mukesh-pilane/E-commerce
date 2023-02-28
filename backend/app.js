const express = require("express")

//rotes import
const product = require("./routes/productRoute")

const app = express()
//middlewares
app.use(express.json())
//routes
app.use('/api/v1',product)

module.exports = app
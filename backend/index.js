const express = require("express")
var cors = require('cors')
require("dotenv/config")
const PORT = process.env.PORT
var bodyParser = require('body-parser')
const routes = require("./src/routers/ProductsRouter")
const app = express()
app.use(cors())
app.use(bodyParser.json())
require("./src/config/db")
app.use("/api", routes)

app.listen(PORT, () => {
	console.log("Server has started!")
})
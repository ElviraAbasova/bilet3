
const mongoose = require("mongoose") 
require("dotenv/config")
const MongoDB = process.env.MongoDB
mongoose
	.connect(MongoDB)
	.then(() => {
			console.log("Connected")
		
	}).catch(err=> console.log(err))
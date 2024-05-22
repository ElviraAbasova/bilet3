const express = require("express")
const router = express.Router()
const productsController = require("../controllers/ProductsController")

router.get("/products", productsController.getAllData)
router.get("/products/:id", productsController.getDataById)
router.delete("/products/:id", productsController.DeleteDataById)
router.post("/products", productsController.postData)
router.patch("/products/:id", productsController.patchDataById)
router.put("/products/:id", productsController.putDataById)






module.exports = router
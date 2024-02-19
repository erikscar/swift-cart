import express from "express";
import { getOneProduct, getProducts } from "../controllers/products.js";
const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.get("/:id", getOneProduct)
// router.get("/:product", searchProducts)



export default productRouter
import express from "express";
import { getOneProduct, getProducts, searchProducts } from "../controllers/products.js";
const productRouter = express.Router()


productRouter.get("/search", searchProducts)
productRouter.get("/", getProducts)
productRouter.get("/:id", getOneProduct)

export default productRouter
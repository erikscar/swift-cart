import express from "express";
import { getComments, getOneProduct, getProducts, postComment } from "../controllers/products.js";
const productRouter = express.Router()

productRouter.get("/", getProducts)
// router.get("/:product", searchProducts)
// router.get("/cart", getCart)
// router.get("/:id", getOneProduct)

// router.get("/:id/comments", getComments)
// router.post("/:id", postComment)

export default productRouter
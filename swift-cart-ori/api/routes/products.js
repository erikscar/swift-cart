import express from "express";
import { deleteItem, getCart, getComments, getOneProduct, getProducts, postCart, postComment } from "../controllers/products.js";
const productRouter = express.Router()

productRouter.get("/", getProducts)
// router.get("/:product", searchProducts)
// router.get("/cart", getCart)
// router.get("/wishlist", getWishList)
// router.get("/:id", getOneProduct)

// router.get("/:id/comments", getComments)
// router.post("/:id", postComment)

// router.post("/:id/cart", postCart)
// router.delete("/:id/cart", deleteItem)

export default productRouter
import express from "express";
import { deleteItem, deleteWishList, getCart, getComments, getOneProduct, getProducts, getWishList, postCart, postComment, postWishList, searchProducts } from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
router.get("/:product", searchProducts)
router.get("/cart", getCart)
router.get("/wishlist", getWishList)
router.get("/:id", getOneProduct)

router.get("/:id/comments", getComments)
router.post("/:id", postComment)

router.post("/:id/cart", postCart)
router.post("/:id/wishlist", postWishList)
router.delete("/:id/cart", deleteItem)
router.delete("/:id/wishlist", deleteWishList)

export default router
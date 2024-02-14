import express from "express";
import { deleteItem, getCart, getComments, getOneProduct, getProducts, postCart, postComment} from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
router.get("/cart", getCart)
router.get("/:id", getOneProduct)

router.get("/:id/comments", getComments)
router.post("/:id", postComment)

router.post("/:id/cart", postCart)
router.delete("/:id/cart", deleteItem)

export default router
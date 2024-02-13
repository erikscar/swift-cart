import express from "express";
import { getComments, getOneProduct, getProducts, postComment} from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getOneProduct)
router.get("/:id/comments", getComments)
router.post("/:id", postComment)


export default router
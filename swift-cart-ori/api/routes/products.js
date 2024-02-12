import express from "express";
import { getComments, getProducts, postRate } from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getComments)
router.post("/:id", postRate)
export default router
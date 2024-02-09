import express from "express";
import { getComments, getProducts } from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
router.get("/:id", getComments)
export default router
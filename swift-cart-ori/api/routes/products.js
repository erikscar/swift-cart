import express from "express";
import { getProducts } from "../controllers/products.js";
const router = express.Router()

router.get("/", getProducts)
// router.get("/category", getProducts)
export default router
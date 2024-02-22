import express from "express";
import {
  getOneProduct,
  getProducts,
  lastReleases,
  mostPopular,
  searchProducts,
} from "../controllers/products.js";
const productRouter = express.Router();

productRouter.get("/search", searchProducts);
productRouter.get("/", getProducts);
productRouter.get("/releases", lastReleases);
productRouter.get("/popular", mostPopular);
productRouter.get("/:id", getOneProduct);

export default productRouter;

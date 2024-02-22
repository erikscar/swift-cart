import express from "express";
import {
  getOneProduct,
  getProducts,
  lastReleases,
  mostPopular,
  searchByCategory,
  searchProducts,
} from "../controllers/products.js";
const productRouter = express.Router();

productRouter.get("/search", searchProducts);
productRouter.get("/searchCategory", searchByCategory);
productRouter.get("/", getProducts);
productRouter.get("/releases", lastReleases);
productRouter.get("/popular", mostPopular);
productRouter.get("/:id", getOneProduct);

export default productRouter;

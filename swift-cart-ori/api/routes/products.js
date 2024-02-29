import express from "express";
import {
  deleteProduct,
  getOneProduct,
  getProducts,
  lastReleases,
  mostPopular,
  postProduct,
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
productRouter.post("/", postProduct)
productRouter.delete("/:id", deleteProduct)

export default productRouter;

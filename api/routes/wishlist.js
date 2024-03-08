import express from "express"
import { deleteWishList, getWishList, postWishList } from "../controllers/wishlist.js"

const wishlistRouter = express.Router()

wishlistRouter.get("/", getWishList)
wishlistRouter.post("/:id", postWishList)
wishlistRouter.delete("/:id", deleteWishList)

export default wishlistRouter
import express from "express"
import { getWishList } from "../controllers/wishlist.js"

const wishlistRouter = express.Router()

wishlistRouter.get("/wishlist", getWishList)

export default wishlistRouter
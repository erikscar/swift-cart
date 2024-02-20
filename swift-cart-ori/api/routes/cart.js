import express from "express"
import { deleteCart, getCart, postCart } from "../controllers/cart.js"

const cartRouter = express.Router()

cartRouter.get("/", getCart)

cartRouter.post("/:id", postCart)
cartRouter.delete("/:id", deleteCart)

export default cartRouter
import express from "express";
import productsRoutes from "./routes/products.js"
import wishlistRoutes from "./routes/wishlist.js"
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/', productsRoutes)
app.use('/wishlist', wishlistRoutes)
app.use('/:id', productsRoutes, wishlistRoutes)
app.listen(8800)
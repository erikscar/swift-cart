import express from "express";
import productsRoutes from "./routes/products.js"
import wishlistRoutes from "./routes/wishlist.js"
import cartRoutes from "./routes/cart.js"
import commentsRoutes from "./routes/comments.js"
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

app.use('/products', productsRoutes)
app.use('/wishlist', wishlistRoutes)
app.use('/cart', cartRoutes)
app.use('/comments', commentsRoutes)

app.listen(8800)
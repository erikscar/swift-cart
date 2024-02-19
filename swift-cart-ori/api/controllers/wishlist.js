import { db } from "../db.js";

export const getWishList = (_, res) => {
  const q = "SELECT * FROM wishlist LEFT JOIN products ON wishlist.product_id = products.product_id"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}


import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM products LEFT JOIN rate ON products.rate_id = rate.id"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

export const getComments = (req, res) => {
  const id = req.params.id

  const q = `
    SELECT * FROM products 
    LEFT JOIN products_rates ON products.id = products_rates.product_id
    LEFT JOIN rate ON products_rates.rate_id = rate.id
    WHERE products.id = ? 
  `;

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}
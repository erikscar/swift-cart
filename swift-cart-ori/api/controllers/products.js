import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM products"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

export const getOneProduct = (req, res) => {
  const q = "SELECT * FROM products WHERE product_id = ?"
  const productId = req.params.id

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data[0])
  } )
}

export const postComment = (req, res) => {
  const q = "INSERT INTO comments(`username`, `content`, `stars`, `product_id`) VALUES (?, ?, ?, ?)"
  const { username, content, stars} = req.body
  const productId = req.params.id

  db.query(q, [username, content, stars, productId], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Avaliação Criada com Sucesso")
  } )
}

export const getComments = (req, res) => {
  const q = "SELECT * FROM comments WHERE product_id = ?"
  const productId = req.params.id

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}
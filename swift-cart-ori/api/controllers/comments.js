import { db } from "../db.js";

export const getComments = (req, res) => {
  const q = "SELECT * FROM comments WHERE product_id = ?"

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

export const postComments = (req, res) => {
  const q = "INSERT INTO comments(`username`, `content`, `stars`, `product_id`) VALUES (?, ?, ?, ?)"
  const { username, content, stars } = req.body

  db.query(q, [username, content, stars, req.params.id], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Avaliação Inserida!")
  })
}
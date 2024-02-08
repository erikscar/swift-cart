import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM products"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

export const getProductById = (req, res) => {
  const id = req.params.id
  const q = `SELECT * FROM products WHERE id = ?`

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data[0])
  })
}

export const getComments = (req, res) => {
  const id = req.params.id;

  const q = "SELECT products.*, comments.* FROM products p LEFT JOIN comments c ON p.id = c.product_id";

  db.query(q, (err, data) => {
    if (err) {
      console.error("Erro ao buscar os comentários:", err);
      return res.status(500).json({ error: "Erro ao buscar os comentários" });
    }

    return res.status(200).json(data);
  });
};

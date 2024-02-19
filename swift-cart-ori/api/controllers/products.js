import { db } from "../db.js";

export const getProducts = (_, res) => {
  const query = `
    SELECT 
      products.*, 
      SUM(comments.stars) AS total_stars,
      COUNT(comments.comment_id) AS total_comments
    FROM 
      products 
    LEFT JOIN 
      comments ON comments.product_id = products.product_id
    GROUP BY 
      products.product_id
  `;

  db.query(query, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getOneProduct = (req, res) => {
  const q = "SELECT * FROM products WHERE product_id = ?"
  const productId = req.params.id

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data[0])
  })
}

export const postComment = (req, res) => {
  const q = "INSERT INTO comments(`username`, `content`, `stars`, `product_id`) VALUES (?, ?, ?, ?)"
  const { username, content, stars } = req.body
  const productId = req.params.id

  db.query(q, [username, content, stars, productId], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Avaliação Criada!")
  })
}

export const getComments = (req, res) => {
  const q = "SELECT * FROM comments WHERE product_id = ?"
  const productId = req.params.id

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

export const searchProducts = (req, res) => {
  const { searchInput } = req.query;
  const q = `SELECT * FROM products WHERE name LIKE ?`;

  db.query(q, [`%${searchInput}%`], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};
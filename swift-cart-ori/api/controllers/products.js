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
  const q = "SELECT * FROM products WHERE product_id = ?";
  const productId = req.params.id;

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

export const searchProducts = (req, res) => {
  const { searchInput } = req.query;
  const q = `
    SELECT products.*, 
    SUM(comments.stars) AS total_stars, 
    COUNT(comments.comment_id) AS total_comments
    FROM products
    LEFT JOIN comments ON comments.product_id = products.product_id 
    WHERE products.name LIKE ?
    GROUP BY products.product_id`;

  db.query(q, [`%${searchInput}%`], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const lastReleases = (_, res) => {
  const q = `SELECT products.*, 
    SUM(comments.stars) AS total_stars, 
    COUNT(comments.comment_id) AS total_comments
    FROM products
    LEFT JOIN comments ON comments.product_id = products.product_id 
    GROUP BY products.product_id
    ORDER BY products.created_at DESC 
    LIMIT 4;
`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const mostPopular = (_, res) => {
  const q = `SELECT products.*, 
    SUM(comments.stars) AS total_stars, 
    COUNT(comments.comment_id) AS total_comments
    FROM products
    LEFT JOIN comments ON comments.product_id = products.product_id 
    GROUP BY products.product_id
    ORDER BY (SUM(comments.stars) / COUNT(comments.comment_id)) DESC 
    LIMIT 4;
`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const searchByCategory = (req, res) => {
  const q = `
  SELECT p.*, 
  SUM(c.stars) AS total_stars, 
  COUNT(c.comment_id) AS total_comments
  FROM products p
  LEFT JOIN comments c ON c.product_id = p.product_id 
  WHERE p.category = ?
  GROUP BY p.product_id;`

  const { category } = req.query;

  db.query(q, [category], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

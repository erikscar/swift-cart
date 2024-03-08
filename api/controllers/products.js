import { db } from "../db.js";

//Obter Todos os Produtos e a Soma das Estrelas e Quantidade de Comentários
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

//Obter Apenas um Produto
export const getOneProduct = (req, res) => {
  const q = "SELECT * FROM products WHERE product_id = ?";
  const productId = req.params.id;

  db.query(q, [productId], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data[0]);
  });
};

//Inserir um Produto no Sistema
export const postProduct = (req, res) => {
  const q = "INSERT INTO products(`name`, `description`, `image`, `price`, `brand`, `category`) VALUES (?, ?, ?, ?, ?, ?)"
  const { name, description, image, price, brand, category } = req.body

  db.query(q, [name, description, image, price, brand, category], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Produto Adicionado com Sucesso")
  })
}

//Atualizar um Produto no Sistema
export const updateProduct = (req, res) => {
  const q = `
      UPDATE products
      SET name = ?, description = ?, image = ?, price = ?, brand = ?, category = ?
      WHERE product_id = ?`
  const { name, description, image, price, brand, category } = req.body

  db.query(q, [name, description, image, price, brand, category, req.params.id], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Produto Atualizado com Sucesso")
  })
}

//Excluir um Produto do Sistema 
export const deleteProduct = (req, res) => {
  const q = "DELETE FROM products WHERE product_id = ? LIMIT 1"

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Produto Excluído com Sucesso")
  })
}

//Buscar por um Produto Inserido pelo Usuário no Input e a Soma de suas Estrelas e Quantidade de Comentários 
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


//Obter os 4 Últimos Produtos Adicionado e a Soma de suas Estrelas e Quantidade de Comentários 
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

//Obter os 4 Produtos Mais Populares (Razão da Soma de suas Estrelas pela Quantidade de Comentários) 
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

//Buscar Produtos por uma Determinada Categoria e a Soma de suas Estrelas e Quantidade de Comentários 
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

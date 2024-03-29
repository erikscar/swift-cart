import { db } from "../db.js";


//Obter todos os Produtos da Lista de Favoritos/Desejos
export const getWishList = (_, res) => {
  const q = "SELECT * FROM wishlist LEFT JOIN products ON wishlist.product_id = products.product_id"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

//Inserir Produtos na Lista de Favoritos/Desejos
export const postWishList = (req, res) => {
  const q = "INSERT INTO wishlist(`product_id`) VALUES (?)"

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Produto Adicionado aos Favoritos!")
  })
}

//Excluir Produtos da Lista de Favoritos/Desejos
export const deleteWishList = (req, res) => {
  const q = "DELETE FROM wishlist WHERE product_id = ? LIMIT 1"

  db.query(q, [req.params.id], (err) => {
    if (err) res.json(err)

    return res.status(200).json("Produto Excluído!")
  })
}


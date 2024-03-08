import { db } from "../db.js";

//Obter Todos os Produtos do Carrinho
export const getCart = (_, res) => {
  const q = "SELECT * FROM cart LEFT JOIN products ON cart.product_id = products.product_id"

  db.query(q, (err, data) => {
    if (err) return res.json(err)

    return res.status(200).json(data)
  })
}

//Adicionar Produtos ao Carrinho
export const postCart = (req, res) => {
  const q = "INSERT INTO cart(`product_id`) VALUES (?)"

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err)

    return res.status(200).json("Produto Adicionado ao Carrinho")
  })
}

//Deletar Produtos do Carrinho
export const deleteCart = (req, res) => {
  const q = "DELETE FROM cart WHERE product_id = ? LIMIT 1"

  db.query(q, [req.params.id], (err) => {
    if (err) res.json(err)

    return res.status(200).json("Produto Excluído")
  })
}
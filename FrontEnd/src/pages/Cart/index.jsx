import "./style.css";
import { Link, useOutletContext } from "react-router-dom";
import { IoSearchOutline, IoHeart, IoTrashSharp } from "react-icons/io5";
import SearchPage from "../SearchPage/search";
import useProductsCRUD from "../../hooks/useProductsCRUD";

export default function Cart() {
  const { products, deleteProducts, postProducts } = useProductsCRUD("http://localhost:8800/cart")
  const productsFoundContext = useOutletContext();
  const productsFound = productsFoundContext[0]

  const subtotal = products.reduce((acum, product) => {
    console.log(acum, product.price)
    return acum + parseFloat(product.price)
  }, 0);


  return (
    <>
      {productsFound.length === 0 ? (
        products.length === 0 ? (
          <div className="blank-products">
            <h1 className="text-align-center">Parece que o seu carrinho está um pouco solitário.</h1>
            <p className="text-align-center">
              Vamos explorar juntos e encontrar algo especial para preencher
              esse espaço vazio?
            </p>
            <Link to="/" className="home-btn">
              <IoSearchOutline /> Explorar
            </Link>
          </div>
        ) : (
          <>
            <h1 className="section-title text-align-center">PRODUTOS DO CARRINHO</h1>
            <div className="cart-container">

              <div className="cart-table-container">
                <table cellSpacing="50">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Marca</th>
                      <th>Quantidade</th>
                      <th>Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, id) => (
                      <tr key={id}>
                        <td className="cart-image-wrapper">
                          <img src={product.image} alt={product.name} />
                          <div>
                            <p>{product.name}</p>
                            <div
                              className="icon-wrapper"
                              onClick={() => deleteProducts(`http://localhost:8800/cart/${product.product_id}`)}
                            >
                              < IoTrashSharp size={16} />
                              <p className="is-grey">Remover Item</p>
                            </div>
                            <div className="icon-wrapper">
                              <IoHeart size={16} color="red"
                                onClick={() => postProducts(`http://localhost:8800/wishlist/${product.product_id}`, product.product_id)} />
                              <p className="is-grey">Adicionar aos Favoritos</p>
                            </div>
                          </div>
                        </td>
                        <td>{product.brand}</td>
                        <td>1</td>
                        <td>R$ {product.price},00</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="order-container">
                <h1 className="text-align-center">Resumo do Pedido</h1>

                <div className="order-info-wrapper">
                  <p className="is-grey">SubTotal: </p>
                  <p>R$ {subtotal},00</p>
                </div>

                <div className="order-info-wrapper">
                  <p className="is-grey">Entrega: </p>
                  <p>Grátis</p>
                </div>

                <div className="order-info-wrapper">
                  <p className="is-grey">Total: </p>
                  <p>R$ {subtotal},00</p>
                </div>
                <button className="finish-order-btn">Finalizar Compra</button>
              </div>
            </div>
          </>
        )
      ) : (
        <SearchPage />
      )
      }
    </>
  );
}

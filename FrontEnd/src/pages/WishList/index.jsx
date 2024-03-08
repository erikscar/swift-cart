import "./style.css";
import { useOutletContext, Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { GiDesert } from "react-icons/gi";
import { IoSearchOutline, IoHeart, IoTrashSharp, } from "react-icons/io5";
import SearchPage from "../SearchPage/search";
import useProductsCRUD from "../../hooks/useProductsCRUD";

export default function WishList() {
  const { products, deleteProducts, postProducts } = useProductsCRUD("http://localhost:8800/wishlist")
  const productsFoundContext = useOutletContext()
  const productsFound = productsFoundContext[0]

  return (
    <>
      {productsFound.length === 0 ? (
        <>
          {products.length === 0 ? (
            <div className="blank-products">
              <h1>
                Ops! Parece que sua lista de favoritos está tão vazia quanto um
                deserto. <GiDesert fontSize={60} />
              </h1>
              <p>Que tal adicionar produtos?</p>
              <Link to="/" className="home-btn">
                <IoSearchOutline /> Explorar
              </Link>
            </div>
          ) : (
            <>
              <h1 className="section-title">
                LISTA DE FAVORITOS <IoHeart size={60} color="red" />
              </h1>
              <div className="wishlist-table-container">
                <table cellSpacing="80">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Estoque</th>
                      <th>Preço</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, id) => (
                      <tr key={id} className="list-items">
                        <td className="product-image-wrapper">
                          <img src={product.image} />
                          <p>{product.name}</p>
                        </td>
                        <td>Disponível</td>
                        <td>R$ {product.price},00</td>
                        <td>
                          <button
                            onClick={() => postProducts(`http://localhost:8800/cart/${product.product_id}`, product.product_id)}
                            className="add-btn"
                          >
                            <BsCart3 /> Adicionar ao Carrinho{" "}
                          </button>
                          <button
                            onClick={() => deleteProducts(`http://localhost:8800/wishlist/${product.product_id}`)}
                            className="rmv-fav-btn"
                          >
                            <IoTrashSharp /> Remover dos Favoritos
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ) : (
        <SearchPage />
      )}
    </>
  );
}

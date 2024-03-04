import { FaHeart, FaTrash } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import axios from "axios";
import "./index.css";
import { useEffect, useState } from "react";
import { useOutletContext, Link } from "react-router-dom";
import Search from "../SearchPage/search";
import { toast } from "react-toastify";
import { GiDesert } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";

export default function WishList() {
  const [products, setProducts] = useState([]);
  const searchContext = useOutletContext();

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8800/wishlist");
    setProducts(res.data);
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  const postToCart = async (id) => {
    try {
      await axios.post(`http://localhost:8800/cart/${id}`, {
        product_id: id,
      });
      toast.success("Produto Adicionado ao Carrinho");
    } catch (error) {
      toast.error("Ocorreu um Erro Inesperado");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`http://localhost:8800/wishlist/${id}`)
        .then(({ data }) => {
          toast.warning(data);
          getProducts();
        });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      {searchContext[0].length === 0 ? (
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
                LISTA DE FAVORITOS <FaHeart size={60} color="red" />
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
                        <td>R$ {product.price}</td>
                        <td>
                          <button
                            onClick={() => postToCart(product.product_id)}
                            className="add-btn"
                          >
                            <BsCart4 /> Adicionar ao Carrinho{" "}
                          </button>
                          <button
                            onClick={() => handleDelete(product.product_id)}
                            className="rmv-fav-btn"
                          >
                            <FaTrash /> Remover dos Favoritos
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
        <Search />
      )}
    </>
  );
}

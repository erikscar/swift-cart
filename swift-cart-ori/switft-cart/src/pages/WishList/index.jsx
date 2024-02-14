import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaHeart, FaTrash } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";

import "./index.css";
export default function WishList() {
  return (
    <>
      <Header />
      <h1 className="main-title">
        LISTA DE FAVORITOS <FaHeart className="heart-icon" />
      </h1>

      <table cellSpacing="50">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Estoque</th>
            <th>Preço</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="product-image-wrapper">
              <img src="/apple.png" />
              <p>Iphone</p>
            </td>
            <td>TUF Gaming</td>
            <td>1</td>
            <td>
              <button className="add-btn">Adicionar ao Carrinho </button>
              <button className="rmv-fav-btn">Remover dos Favoritos</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  );
}

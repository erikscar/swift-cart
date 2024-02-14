import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaHeart } from "react-icons/fa6";
import "./index.css";
export default function WishList() {
  return (
    <>
      <Header />
      <h1 className="main-title">
        LISTA DE FAVORITOS <FaHeart className="heart-icon" />
      </h1>

      <table className="fav-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  );
}

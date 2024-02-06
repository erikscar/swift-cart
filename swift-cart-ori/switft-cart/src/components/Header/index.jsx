import "./index.css"
import { IoSearchOutline } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import ModalForm from "../ModalForm";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header>

      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="logo-img" className="logo-img" />
          <h1>SwiftCart</h1>
        </Link>

      </div>
      <ModalForm />
      <div className="search-input-wrapper">
        <input type="text" name="" id="" placeholder="Encontre Produtos..." />
        <Link to="/category" className="search-icon"><IoSearchOutline /></Link>
      </div>

      <div className="nav-item">
        <IoPersonSharp className="nav-icon" />
        <div>
          <p className="is-grey">Login</p>
          <p>Minha Conta</p>
        </div>
      </div>

      <div className="nav-item">
        <IoMdHeartEmpty className="nav-icon" />
        <div>
          <p className="is-grey">Favoritos</p>
          <p >Lista de Desejos</p>
        </div>
      </div>


      <div className="nav-item">
        < GiShoppingCart className="nav-icon" />
        <div>
          <p className="is-grey">Carrinho</p>
          <p >Meus Pedidos</p>
        </div>
      </div>

    </header>
  )
}
import "./index.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import SearchInput from "../../components/SearchInput";
import { useState } from "react";

export default function Header() {
  const [found, setFound] = useState([]);

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="logo-img" className="logo-img" />
            <h1>SwiftCart</h1>
          </Link>
        </div>
        <SearchInput setFound={setFound} />
        <div className="nav-item">
          <IoPersonSharp className="nav-icon" />
          <Link to="/" className="teste">
            <p className="is-grey">Login</p>
            <p>Minha Conta</p>
          </Link>
        </div>

        <div className="nav-item">
          <IoMdHeartEmpty className="nav-icon" />
          <Link to="/wishlist" className="teste">
            <p className="is-grey">Favoritos</p>
            <p>Lista de Desejos</p>
          </Link>
        </div>

        <div className="nav-item">
          <GiShoppingCart className="nav-icon" />
          <Link to="/cart" className="teste">
            <p className="is-grey">Carrinho</p>
            <p>Meus Pedidos</p>
          </Link>
        </div>
      </header>

      <Outlet context={found} />

      <footer>
        <div class="footer-infos">
          <div class="logo">
            <img src="logo.png" alt="logo" class="logo-img" />
            <h1 class="main-title">SwiftCart</h1>
          </div>
          <p>Velocidade e Conveniência, suas compras em um clique!</p>
          <div class="icons-wrapper">
            <i class="bi bi-github"></i>
            <i class="bi bi-linkedin"></i>
          </div>
        </div>

        <div class="footer-infos">
          <h2>Links</h2>
          <a href="" class="footer-links">
            Minha Conta
          </a>
          <a href="/wishlist" class="footer-links">
            Lista de Desejos
          </a>
          <a href="/cart" class="footer-links">
            Meus Pedidos
          </a>
        </div>
        <div class="footer-infos">
          <h2>Contato</h2>
          <p>erikscarcela@gmail.com</p>
          <p>+55 (11) 940080990</p>
        </div>
      </footer>
    </>
  );
}

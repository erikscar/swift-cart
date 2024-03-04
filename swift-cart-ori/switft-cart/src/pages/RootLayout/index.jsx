import "./index.css";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { Link, Outlet } from "react-router-dom";
import SearchInput from "../../components/searchInput";
import { useState } from "react";
import DepartmentsNav from "../../components/departmentsNav";

export default function Header() {
  const [found, setFound] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const clearSearchValues = () => {
    setFound([]);
    setSearchValue("");
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" onClick={clearSearchValues}>
            <img src="/logo.png" alt="logo-img" className="logo-img" />
            <h1>SwiftCart</h1>
          </Link>
        </div>
        <SearchInput setFound={setFound} setSearchValue={setSearchValue} />


        <div className="nav-item">
          <IoMdHeartEmpty className="nav-icon" />
          <Link to="/wishlist" className="teste" onClick={clearSearchValues}>
            <p className="is-grey">Favoritos</p>
            <p>Lista de Desejos</p>
          </Link>
        </div>

        <div className="nav-item">
          <GiShoppingCart className="nav-icon" />
          <Link to="/cart" className="teste" onClick={clearSearchValues}>
            <p className="is-grey">Carrinho</p>
            <p>Meus Pedidos</p>
          </Link>
        </div>
      </header>
      <DepartmentsNav setFound={setFound} setSearchValue={setSearchValue} />

      <Outlet context={[found, searchValue, setFound, setSearchValue, clearSearchValues]} />

      <footer>
        <div class="footer-infos">
          <div class="logo">
            <img src="/logo.png" alt="logo" class="logo-img" />
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
import "./style.css";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { BsCart3, BsLinkedin, BsHeart, BsGithub } from "react-icons/bs";
import SearchInput from "../../components/searchInput";
import DepartmentsNav from "../../components/departmentsNav";

export default function Header() {
  const [productFound, setProductFound] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const clearSearchValues = () => {
    setProductFound([]);
    setSearchValue("");
  };

  return (
    <>
      <header>
        <div className="logo">
          <Link to="/" onClick={clearSearchValues}>
            <img src="/logo.png" alt="logo-img" className="logo-img" />
            <h1 className="logo-title">SwiftCart</h1>
          </Link>
        </div>

        <SearchInput setProductFound={setProductFound} setSearchValue={setSearchValue} />

        <nav>
          <div className="nav-item">
            <BsHeart className="nav-icon" />
            <Link to="/wishlist" className="link-anchor" onClick={clearSearchValues}>
              <p className="is-grey">Favoritos</p>
              <p>Lista de Desejos</p>
            </Link>
          </div>
          <div className="nav-item">
            <BsCart3 className="nav-icon" />
            <Link to="/cart" className="link-anchor" onClick={clearSearchValues}>
              <p className="is-grey">Carrinho</p>
              <p>Meus Pedidos</p>
            </Link>
          </div>
        </nav>
      </header>

      <DepartmentsNav setProductFound={setProductFound} setSearchValue={setSearchValue} />

      <Outlet context={[productFound, searchValue, setProductFound, setSearchValue, clearSearchValues]} />

      <footer>
        <div class="footer-items">
          <div className="logo">
            <Link to="/" onClick={clearSearchValues}>
              <img src="/logo.png" alt="logo-img" className="logo-img" />
              <h1 className="logo-title">SwiftCart</h1>
            </Link>
          </div>
          <p>Velocidade e Conveniência, suas compras em poucos cliques!</p>
        </div>

        <div class="footer-items">
          <h2>Links</h2>
          <Link to="/wishlist" class="footer-links">
            Lista de Desejos
          </Link>
          <Link to="/cart" class="footer-links">
            Meus Pedidos
          </Link>
        </div>

        <div class="footer-items">
          <h2>Contato</h2>
          <p>erikscarcela@gmail.com</p>
          <p>+55 (11) 94008-0990</p>
        </div>

        <div class="social-icons-wrapper">
          <a href="https://github.com/erikscar" target="_blank"><BsGithub /></a>
          <a href="https://www.linkedin.com/in/erik-scarcela/" target="_blank"><BsLinkedin /></a>
        </div>
      </footer>
    </>
  );
}

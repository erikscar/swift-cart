import DepartmentsNav from "../components/DepartmentsNav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import SellCard from "../components/SellCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/")
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [setProducts])

  return (
    <>
      <Header />
      <DepartmentsNav />
      <div className="main-container">
        <aside>
          <p>Categoria</p>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Mouses</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="teste" />
            <label htmlFor="">Celulares</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Monitores</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Notebooks</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Fones de Ouvido</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Controles</label>
          </div>

          <p>Marca</p>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">HyperX</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">TUF Gaming</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Xiaomi</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Logitech</label>
          </div>

          <p>Avaliação</p>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <p>Preço</p>

          <div className="input-price-wrapper">
            <input type="text" placeholder="Máximo" className="price-input" />
            <MdAttachMoney className="price-icon" />
            <input type="text" placeholder="Minimo" className="price-input" />
            <MdAttachMoney className="price-icon-2" />
          </div>
        </aside>

        <div className="items-container">
          <h1>Você Pesquisou por: "Monitores"</h1>

          <div className="order-section">
            <p>Ordenar: </p>
            <select name="" id="">
              <option selected disabled>Popularidade</option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>
            <select name="" id="">
              <option selected disabled>Preço</option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>
            <select name="" id="">
              <option selected disabled>Recém Adicionados</option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>

          </div>
          <SellCard products={products} />
        </div>

      </div>
      <Footer />
    </>
  )
}
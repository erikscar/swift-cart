import DepartmentsNav from "../components/DepartmentsNav";
import Header from "../components/Header";
import { MdAttachMoney } from "react-icons/md";
import { FaPercent } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { FaBarcode } from "react-icons/fa6";
import Card from "../components/Card";
import SellCard from "../components/SellCard";
import Footer from "../components/Footer";
import axios from "axios"
import { useEffect, useState } from "react";




export default function Index() {
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
      <div className="best-offer-card">
        <div className="best-offer-desc">
          <span>Melhor Oferta</span>
          <h1>EDIÇÃO ESPECIAL</h1>
          <h2>A MELHOR ESCOLHA DO ANO</h2>
          <p>Desconto de até R$30 e Frete Grátis!</p>
          <button>Compre Agora</button>
        </div>
        <img src="/headphone.png" alt="headphone-img" />
      </div>

      <div className="advantages">
        <div>
          <MdAttachMoney />
          <p>CashBack em Compras</p>
        </div>
        <div>
          <FaPercent />
          <p>Melhores Ofertas</p>
        </div>
        <div>
          <FiTruck />
          <p>Frete Grátis no Site</p>
        </div>
        <div>
          <FaBarcode />
          <p>10% Off no Boleto</p>
        </div>
      </div>

      <div className="card-container">
        <Card />
      </div>

      <h1 className="best-seller-title">OS MAIS POPULARES DO SITE</h1>
      <p className="best-seller-desc">Descubra os Favoritos de Nossos Clientes, explorando os Mais Vendidos do Site!</p>

      <div className="sell-card-container">
        <SellCard products={products} />
      </div>

      <Footer />
    </>
  )
}
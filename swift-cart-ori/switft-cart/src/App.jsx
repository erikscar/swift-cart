import DepartmentsNav from "./components/DepartmentsNav";
import Header from "./components/Header";
import { MdAttachMoney } from "react-icons/md";
import { FaPercent } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import { FaBarcode } from "react-icons/fa6";
import Card from "./components/Card";




export default function App() {
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
    </>
  )
}
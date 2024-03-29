import "./style.css"
import { useOutletContext } from "react-router-dom";
import { FaPercent, FaBarcode, FaTruck, FaMoneyBill1Wave } from "react-icons/fa6";
import Card from "../../components/Card";
import ProductCard from "../../components/IndividualCards/productCard"
import SearchPage from "../SearchPage/search";
import useProductsCRUD from "../../hooks/useProductsCRUD";

export default function Home() {
  const { products } = useProductsCRUD("http://localhost:8800/products")
  const productsFoundContext = useOutletContext();
  const productsFound = productsFoundContext[0]

  return (
    <>
      {productsFound.length === 0 ? (
        <>
          <div className="best-offer-card">
            <div className="text-align-center">
              <span className="best-offer-btn">Melhor Oferta</span>
              <h1 className="section-title">EDIÇÃO ESPECIAL</h1>
              <p className="best-offer-subtitle">A MELHOR ESCOLHA DO ANO</p>
              <p className="best-offer-subtitle">EM FONES DE OUVIDOS</p>
              <p>Desconto de até R$30 e Frete Grátis!</p>
              <button className="best-offer-buy-btn">Compre Agora</button>
            </div>
            <img src="/headphone.png" alt="headphone-img" className="headphone-img" />
          </div>

          <div className="advantages">
            <div>
              <FaMoneyBill1Wave />
              <p>CashBack em Compras</p>
            </div>
            <div>
              <FaPercent />
              <p>Melhores Ofertas</p>
            </div>
            <div>
              <FaTruck />
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

          <h2 className="section-title text-align-center">OS MAIS POPULARES DO SITE</h2>
          <p className="best-seller-desc">
            Descubra os Favoritos de Nossos Clientes, explorando os Mais
            Vendidos do Site!
          </p>

          <div className="product-card-container">
            <ProductCard products={products} />
          </div>
        </>
      ) : (
        <SearchPage />
      )}
    </>
  );
}

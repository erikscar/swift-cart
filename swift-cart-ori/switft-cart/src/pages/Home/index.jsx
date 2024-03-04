import Card from "../../components/card";
import SellCard from "../../components/sellCard";
import { MdAttachMoney } from "react-icons/md";
import { FaPercent, FaBarcode } from "react-icons/fa6";
import { FiTruck } from "react-icons/fi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Search from "../SearchPage/search";

export default function Index() {
  const [products, setProducts] = useState([]);
  const searchContext = useOutletContext();

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  return (
    <>
      {searchContext[0].length === 0 ? (
        <>
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
          <p className="best-seller-desc">
            Descubra os Favoritos de Nossos Clientes, explorando os Mais
            Vendidos do Site!
          </p>

          <div className="sell-card-container">
            <SellCard products={products} />
          </div>
        </>
      ) : (
        <Search />
      )}
    </>
  );
}

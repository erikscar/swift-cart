import "./style.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaPercent, FaBarcode, FaTruck, FaMoneyBill1Wave } from "react-icons/fa6";
import Card from "../../components/card";
import ProductCard from "../../components/productCard";


import Search from "../SearchPage/search";
export default function Index() {
  const [products, setProducts] = useState([]);
  const productsFound = useOutletContext();

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
      {productsFound[0].length === 0 ? (
        <>
          <div className="best-offer-card">
            <div className="text-align-center">
              <span className="best-offer-btn">Melhor Oferta</span>
              <h1 className="section-title">EDIÇÃO ESPECIAL</h1>
              <h2 className="best-offer-subtitle">A MELHOR ESCOLHA DO ANO</h2>
              <p>Desconto de até R$30 e Frete Grátis!</p>
              <button className="best-offer-buy-btn">Compre Agora</button>
            </div>
            <img src="/headphone.png" alt="headphone-img" />
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

          <h1 className="section-title text-align-center">OS MAIS POPULARES DO SITE</h1>
          <p className="best-seller-desc">
            Descubra os Favoritos de Nossos Clientes, explorando os Mais
            Vendidos do Site!
          </p>

          <div className="product-card-container">
            <ProductCard products={products} />
          </div>
        </>
      ) : (
        <Search />
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/productCard/index.jsx";
import SearchPage from "../SearchPage/search.jsx";

function Popular() {
  const [popularProduct, setPopularProduct] = useState([]);
  const searchContext = useOutletContext()

  const getPopularProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/products/popular");
      setPopularProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularProducts();
  }, [setPopularProduct]);

  return (
    <>
      {searchContext[0].length === 0 ? (
        <>
          {popularProduct.length === 0 ? (
            <div className="blank-products">
              <h1>Parece que não há Produtos Cadastrados!</h1>
              <p className="is-grey">Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
            </div>
          ) :
            <>
              <h1 className="section-title text-align-center">OS PRODUTOS MAIS POPULARES</h1>
              <div className="product-card-container">
                <ProductCard products={popularProduct} />
              </div>
            </>
          }
        </>
      ) : (
        <SearchPage />
      )}
    </>
  );
}

export default Popular;

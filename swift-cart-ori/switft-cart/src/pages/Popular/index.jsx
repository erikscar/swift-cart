import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/sellCard/index.jsx";
import Search from "../SearchPage/search.jsx";
import { useOutletContext } from "react-router-dom";

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
          <div>
            <h1 className="best-seller-title last-release">OS MAIS POPULARES</h1>
            <div className="sell-card-container">
              {popularProduct.length === 0 ? (
                <div className="blank-products">
                  <h1>Parece que não há Produtos Cadastrados!</h1>
                  <p>Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
                </div>
              ) : <SellCard products={popularProduct} />}
            </div>
          </div>
        </>
      ) : (
        <Search />
      )}
    </>
  );
}

export default Popular;

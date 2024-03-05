import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { PiSmileySadDuotone } from "react-icons/pi";
import ProductCard from "../../components/IndividualCards/productCard.jsx"
import SearchPage from "../SearchPage/search.jsx";

function Release() {
  const [lastRelease, setLastrelease] = useState([]);
  const searchContext = useOutletContext()
  const getLastReleases = async () => {
    try {
      const res = await axios.get("http://localhost:8800/products/releases");
      setLastrelease(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLastReleases();
  }, [lastRelease]);

  return (
    <>
      {searchContext[0].length === 0 ? (
        <>
          {lastRelease.length === 0 ? (
            <div className="blank-products">
              <h1>Parece que não há Produtos Cadastrados! <PiSmileySadDuotone /></h1>
              <p>Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
            </div>
          ) :
            <>
              <h1 className="section-title text-align-center">OS LANÇAMENTOS MAIS RECENTES</h1>
              <div className="product-card-container">
                <ProductCard products={lastRelease} />
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

export default Release;

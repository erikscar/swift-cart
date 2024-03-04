import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/sellCard/index.jsx";
import Search from "../SearchPage/search.jsx";
import "./index.css";
import { useOutletContext } from "react-router-dom";

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
          <div className="sell-card-container">
            <h1 className="best-seller-title last-release">
              OS LANÇAMENTOS MAIS RECENTES
            </h1>
            {lastRelease.length === 0 ? (
              <div className="blank-products">
                <h1>Parece que não há Produtos Cadastrados!</h1>
                <p>Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
              </div>
            ) : <SellCard products={lastRelease} />}
          </div>
        </>
      ) : (
        <Search />
      )}
    </>
  );
}

export default Release;

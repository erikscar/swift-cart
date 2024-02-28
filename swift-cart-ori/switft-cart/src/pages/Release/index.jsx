import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/SellCard";
import Search from "../search.jsx";
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
            <SellCard products={lastRelease} />
          </div>
        </>
      ) : (
        <Search />
      )}
    </>
  );
}

export default Release;

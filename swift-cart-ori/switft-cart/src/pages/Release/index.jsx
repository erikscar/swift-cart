import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/SellCard";
import "./index.css";

function Release() {
  const [lastRelease, setLastrelease] = useState([]);

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
      <div className="sell-card-container">
        <h1 className="best-seller-title last-release">
          OS 5 LANÇAMENTOS MAIS RECENTES
        </h1>
        <SellCard products={lastRelease} />
      </div>
    </>
  );
}

export default Release;

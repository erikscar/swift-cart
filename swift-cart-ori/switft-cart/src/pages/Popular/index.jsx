import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/SellCard";
import Search from "../search.jsx";
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
            <h1 className="best-seller-title last-release">OS 5 MAIS POPULARES</h1>
            <div className="sell-card-container">
              <SellCard products={popularProduct} />
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

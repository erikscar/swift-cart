import axios from "axios";
import { useEffect, useState } from "react";
import SellCard from "../../components/SellCard";

function Popular() {
  const [popularProduct, setPopularProduct] = useState([]);

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
    <div>
      <h1 className="best-seller-title last-release">OS 5 MAIS POPULARES</h1>
      <div className="sell-card-container">
        <SellCard products={popularProduct} />
      </div>
    </div>
  );
}

export default Popular;

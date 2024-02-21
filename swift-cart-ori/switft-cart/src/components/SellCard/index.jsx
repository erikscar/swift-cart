import "./index.css";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegStar } from "react-icons/fa6";

export default function SellCard({ products }) {
  const addToCart = async (productId) => {
    await axios
      .post(`http://localhost:8800/cart/${productId}`, {
        product_id: productId,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
  };
  return (
    <>
      {products
        .sort((a, b) => b.stars - a.stars)
        .map((product, id) => {
          const rate = product.total_stars / product.total_comments;
          return (
            <div className="sell-card" key={id}>
              <Link to={`/${product.product_id}`}>
                <img
                  src={product.image}
                  className="sell-card-img"
                  alt="Product"
                />
              </Link>
              <h1>{product.name}</h1>
              <p className="product-desc">{product.description}</p>
              <div className="price-wrapper">
                <p>R$ {product.price}</p>
                {(() => {
                  const stars = [];
                  const filledStars = Math.round(rate);
                  const totalStars = 5;
                  for (let i = 0; i < totalStars; i++) {
                    if (i < filledStars) {
                      stars.push(<FaStar className="star-icon" key={i} />);
                    } else {
                      stars.push(<FaRegStar className="star-icon" key={i} />);
                    }
                  }
                  return (
                    <div className="stars-wrapper">
                      {isNaN(rate) ? "0.0" : rate.toFixed(2)} {stars}
                    </div>
                  );
                })()}
              </div>
              <div className="sell-btn-wrapper">
                <button
                  onClick={() => addToCart(product.product_id)}
                  className="cart-btn"
                >
                  <BsCart4 />
                  Carrinho
                </button>
                <button className="buy-btn">
                  <GiMoneyStack />
                  Comprar
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

import "./index.css";
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function SellCard({ products }) {
  return (
    <>
      {products
        .sort((a, b) => b.stars - a.stars)
        .map((product, id) => (
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
              <p className="price">R$ {product.price}</p>
              <FaStar />
            </div>
            <div className="sell-btn-wrapper">
              <button className="cart-btn">
                <BsCart4 />
                Carrinho
              </button>
              <button className="buy-btn">
                <GiMoneyStack />
                Comprar
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

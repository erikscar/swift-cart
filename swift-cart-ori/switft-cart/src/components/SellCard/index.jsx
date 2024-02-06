import "./index.css"
import { FaStar } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";

export default function SellCard({ products }) {
  return (
    <>
      {products.map((product, id) => (
        <div className="sell-card" key={id}>
          <img src={product.image} className="sell-card-img" alt="Product" />
          <h1>{product.name}</h1>
          <p className="product-desc">{product.description}</p>
          <div className="price-wrapper">
            <p className="price">R$ {product.price}</p>
            <p><FaStar />4.6</p>
          </div>
          <div className="sell-btn-wrapper">
            <button className="cart-btn"><BsCart4 />Carrinho</button>
            <button className="buy-btn"><GiMoneyStack />Comprar</button>
          </div>
        </div>
      ))}
    </>

  )
}
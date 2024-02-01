import "./index.css"
import { FaStar } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";



export default function SellCard() {
  return (

    <>
      <div className="sell-card">
        <img src="/macbookpro.jpg" className="sell-card-img" />
        <h1>MacBook Pro M1 (2021)</h1>
        <p className="product-desc">Super Fast M1 chip & beuatiful retina display.</p>
        <div className="price-wrapper">
          <p class="price">R$2.245,60</p>
          <p>< FaStar />4,6</p>
        </div>
        <div className="sell-btn-wrapper">
          <button className="cart-btn"><RiShoppingCartLine />Carrinho</button>
          <button className="buy-btn"><GiMoneyStack />Comprar</button>
        </div>
      </div>
    </>

  )
}
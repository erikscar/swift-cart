import { FaStar } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import "./index.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ShowItem() {
  const [product, setProduct] = useState({})

  const { id } = useParams()

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/${id}`)
      setProduct(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getProduct()
  }, [setProduct])

  return (
    <>
      <Header />
      <div className="show-item-container">
        <div className="product-img-wrapper">
          <p className="path">Monitores &gt; TUF Gaming &gt; Monitor Gamer Asus TUF 24 Full HD, 165Hz</p>
          <img src={product.image} className="product-img" />
          <div className="comments-section">
            <h2 className="comments-title">Comentários e Avaliações</h2>
            <select name="" id="">
              <option value="">Mais Recentes</option>
              <option value="">Menos Recentes</option>
            </select>
            <div className="comments">
              <div className="main-comment">
                <div className="commentary">
                  <IoPersonCircleOutline className="profile-icon" />
                  <div>
                    <p className="profile-name">Erik Scarcela Araujo</p>
                    <p className="rate-time">Avaliado em: 14/03/2023</p>
                    <div>
                      <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" />
                    </div>
                  </div>
                </div>
                <div>
                  <p>"Excelente monitor, atendeu as expectativas"</p>
                  <div className="rate-btn-wrapper">
                    <button className="rate-btn"><AiOutlineLike /> 42</button>
                    <button className="rate-btn"><AiFillLike /> 2</button>
                  </div>
                </div>
              </div>
              <div className="main-comment">
                <div className="commentary">
                  <IoPersonCircleOutline className="profile-icon" />
                  <div>
                    <p className="profile-name">Erik Scarcela Araujo</p>
                    <p className="rate-time">Avaliado em: 14/03/2023</p>
                    <div>
                      <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" />
                    </div>
                  </div>
                </div>
                <div>
                  <p>"Excelente monitor, atendeu as expectativas"</p>
                  <div className="rate-btn-wrapper">
                    <button className="rate-btn"><AiOutlineLike /> 42</button>
                    <button className="rate-btn"><AiFillLike /> 2</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-information">

          <div>
            <div className="logo">
              <img src="/logotuf.png" alt="" />
              <p>TUF Gaming</p>
            </div>
            <h1 className="product-name">{product.name}</h1>
            <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> <FaStar className="star-icon" /> 42 Avaliações
            <h1 className="price">R$ {product.price}</h1>
            <p className="ship"><BsTruck />Frete Grátis </p>
            <div className="function-btns">
              <button className="add-cart-btn"><BsCart4 />Adicionar ao Carrinho</button>
              <button className="fav-btn"><IoMdHeartEmpty /></button>
            </div>
            <button className="add-rate"><FaStar className="star-icon" />Adicione uma Avaliação </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
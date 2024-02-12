import { FaStar } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalForm from "../../components/ModalForm";

export default function ShowItem() {
  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProducts] = useState({});
  const [order, setOrder] = useState(false);
  const { id } = useParams();
  let counter = 0

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/${id}`);
      setProduct(res.data);
      setOneProducts(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    () => {
      getProduct();
    },
    [setProduct],
    [setOneProducts]
  );

  let sortComment = [...product];
  const switchOrder = () => {
    if (order) {
      sortComment = product.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setOrder(false);
    } else {
      sortComment = product.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setOrder(true);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      <Header />
      <div className="show-item-container">
        <div className="product-img-wrapper">
          <p className="path">
            {oneProduct.category} &gt; {oneProduct.brand} &gt; {oneProduct.name},
            165Hz
          </p>
          <img src={oneProduct.image} className="product-img" />
          <div className="comments-section">
            <h2 className="comments-title">Comentários e Avaliações</h2>
            <select name="" id="" onChange={switchOrder}>
              <option value="select" disabled selected>
                Ordenar Por:
              </option>
              <option value="new">Mais Recentes</option>
              <option value="older">Menos Recentes</option>
            </select>
            <div className="comments">
              <div className="main-comment">
                {sortComment.map((item, id) => {
                  counter++
                  return (
                    <>
                      <div className="commentary" key={id}>
                        <IoPersonCircleOutline className="profile-icon" />
                        <div>
                          <p className="profile-name">{item.user}</p>
                          <p className="rate-time">
                            {formatDate(item.created_at)}
                          </p>
                          <div>
                            <FaStar className="star-icon" />{" "}
                            <FaStar className="star-icon" />{" "}
                            <FaStar className="star-icon" />{" "}
                            <FaStar className="star-icon" />{" "}
                            <FaStar className="star-icon" />
                            {product.stars}
                          </div>
                        </div>
                        <div>
                          <p>"{item.content}"</p>
                          <div className="rate-btn-wrapper">
                            <button className="rate-btn">
                              <AiOutlineLike /> 42
                            </button>
                            <button className="rate-btn">
                              <AiFillLike /> 2
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="item-information">
          <div>
            <div className="logo">
              <img src="/apple.png" alt="" />
              <p>{oneProduct.brand}</p>
            </div>
            <h1 className="product-name">{oneProduct.name}</h1>
            <FaStar className="star-icon" /> <FaStar className="star-icon" />{" "}
            <FaStar className="star-icon" /> <FaStar className="star-icon" />{" "}
            <FaStar className="star-icon" /> {counter} Avaliações
            <h1 className="price">R$ {oneProduct.price}</h1>
            <p className="ship">
              <BsTruck />
              Frete Grátis{" "}
            </p>
            <div className="function-btns">
              <button className="add-cart-btn">
                <BsCart4 />
                Adicionar ao Carrinho
              </button>
              <button className="fav-btn">
                <IoMdHeartEmpty />
              </button>
            </div>
            <ModalForm oneProduct={oneProduct} getProduct={getProduct} className="add-rate" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { BsCartFill, BsTruck, BsPersonCircle, BsHeartFill } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import RateForm from "../../components/Forms/rateForm";
import SearchPage from "../SearchPage/search";
import useProductsCRUD from "../../hooks/useProductsCRUD";

export default function ShowItem() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [order, setOrder] = useState(false);
  const { products, postProducts } = useProductsCRUD(`http://localhost:8800/products/${id}`)
  const productsFoundContext = useOutletContext()
  const productsFound = productsFoundContext[0]
  let counter = 0;
  let allStars = 0;

  const getComments = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/comments/${id}`);
      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getComments();
  }, []);

  const switchOrder = () => {
    setOrder(!order);
    const sorted = [...comments].sort((a, b) => {
      if (order) {
        return new Date(a.created_at) - new Date(b.created_at);
      } else {
        return new Date(b.created_at) - new Date(a.created_at);
      }
    });
    setComments(sorted);
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <>
      {productsFound.length === 0 ? (
        <div className="show-item-container">

          <div className="product-img-wrapper">

            <p className="product-path">
              {products.category} &gt; {products.brand} &gt; {products.name}
            </p>
            <img src={products.image} className="product-img" />

            <div className="comments-section">
              <h2>Comentários e Avaliações</h2>
              <select className="order-select" onChange={switchOrder}>
                <option value="select" disabled selected>
                  Ordenar Por:
                </option>
                <option value="new">Mais Recentes</option>
                <option value="older">Menos Recentes</option>
              </select>

              <div className="all-comments">
                {comments.map((item, id) => {
                  allStars += item.stars;
                  counter++;
                  return (
                    <>
                      <div className="comment" key={id}>
                        <BsPersonCircle size={65} />
                        <div>
                          <p className="profile-name">{item.username}</p>
                          <p className="rate-time">
                            {formatDate(item.created_at)}
                          </p>
                          <div>
                            {/*Função para Apresentar Estrelas Completas ou Incompletas de Acordo com a Avaliação(rate)*/}
                            {(() => {
                              const stars = [];
                              const filledStars = Math.round(item.stars);
                              const totalStars = 5;
                              for (let i = 0; i < totalStars; i++) {
                                if (i < filledStars) {
                                  stars.push(
                                    <FaStar color="#fdc62e" key={i} />
                                  );
                                } else {
                                  stars.push(
                                    <FaRegStar key={i} />
                                  );
                                }
                              }
                              return stars;
                            })()}
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
                  );
                })}
              </div>
            </div>
          </div>
          <div className="item-information">
            <div>
              <div className="brand">
                <img src={`/${products.brand}.png`} alt={products.brand} className="product-brand" />
              </div>
              <h1 className="product-name">{products.name}</h1>
              <div>
                {(() => {
                  const stars = [];
                  const filledStars = Math.round(allStars / counter);
                  const totalStars = 5;
                  for (let i = 0; i < totalStars; i++) {
                    if (i < filledStars) {
                      stars.push(<FaStar color="#fdc62e" size={22} key={i} />);
                    } else {
                      stars.push(<FaRegStar size={22} key={i} />);
                    }
                  }
                  return (
                    <div className="rate-counter">
                      <p >{stars}</p>
                      <p>{counter} Avaliações</p>
                    </div>

                  );
                })()}
              </div>
              <div className="price-wrapper-show">
                <h1 className="price">R$ {products.price}</h1>
                <p className="truck">
                  <BsTruck />
                  Frete Grátis{" "}
                </p>
              </div>
              <div className="function-btns">
                <button onClick={() => postProducts(`http://localhost:8800/cart/${id}`, id)}
                  className="add-cart-btn">
                  <BsCartFill />
                  Adicionar ao Carrinho
                </button>
                <button onClick={() => postProducts(`http://localhost:8800/wishlist/${id}`, id)}
                  className="fav-btn">
                  <BsHeartFill />
                  Adicionar aos Favoritos
                </button>
                <RateForm
                  getComments={getComments}
                  product={products}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SearchPage />
      )}
    </>
  );
}

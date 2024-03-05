import "./style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { BsCartFill, BsTruck, BsPersonCircle, BsHeartFill } from "react-icons/bs";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import ModalForm from "../../components/Forms/rateForm";
import SearchPage from "../SearchPage/search";

export default function ShowItem() {
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [order, setOrder] = useState(false);
  const searchContext = useOutletContext();

  const { id } = useParams();
  let counter = 0;
  let allStars = 0;

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getComments = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/comments/${id}`);
      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(
    () => {
      getProduct();
      getComments();
    },
    [setProduct],
    [getComments]
  );

  let sortComment = [...comments];
  const switchOrder = () => {
    if (order) {
      sortComment = comments.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
      setOrder(false);
    } else {
      sortComment = comments.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setOrder(true);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };

  const addToCart = async () => {
    await axios
      .post(`http://localhost:8800/cart/${id}`, {
        product_id: id,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
  };

  const addToWishList = async () => {
    await axios
      .post(`http://localhost:8800/wishlist/${id}`, {
        product_id: id,
      })
      .then(({ data }) => toast.success(data))
      .catch(({ data }) => toast.error(data));
  };

  return (
    <>
      {searchContext[0].length === 0 ? (
        <div className="show-item-container">

          <div className="product-img-wrapper">

            <p className="product-path">
              {product.category} &gt; {product.brand} &gt; {product.name}
            </p>
            <img src={product.image} className="product-img" />

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
                {sortComment.map((item, id) => {
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
                <img src={`/${product.brand}.png`} alt={product.brand} className="product-brand" />
              </div>
              <h1 className="product-name">{product.name}</h1>
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
                <h1 className="price">R$ {product.price}</h1>
                <p className="truck">
                  <BsTruck />
                  Frete Grátis{" "}
                </p>
              </div>
              <div className="function-btns">
                <button onClick={addToCart} className="add-cart-btn">
                  <BsCartFill />
                  Adicionar ao Carrinho
                </button>
                <button onClick={addToWishList} className="fav-btn">
                  <BsHeartFill />
                  Adicionar aos Favoritos
                </button>

                <ModalForm
                  getProduct={getProduct}
                  getComments={getComments}
                  product={product}
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

import { FaRegStar, FaStar } from "react-icons/fa6";
import { BsCart4, BsTruck } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import axios from "axios";
import "./index.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ModalForm from "../../components/ModalForm";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShowItem() {
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [order, setOrder] = useState(false);
  const [click, setClick] = useState(false);

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
      .then(({ data }) =>
        toast.success(data, {
          className: "toast",
        })
      )
      .catch(({ data }) =>
        toast.error(data, {
          className: "toast",
        })
      );
  };

  const addToWishList = async () => {
    await axios
      .post(`http://localhost:8800/wishlist/${id}`, {
        product_id: id,
      })
      .then(({ data }) =>
        toast.success(data, {
          className: "toast is-red",
        })
      )
      .catch(({ data }) =>
        toast.error(data, {
          className: "toast",
        })
      );
  };

  return (
    <>
      <ToastContainer
        transition={Slide}
        theme="colored"
        position="bottom-left"
        autoClose={2500}
        closeOnClick={true}
      />
      <div className="show-item-container">
        <div className="product-img-wrapper">
          <p className="path">
            {product.category} &gt; {product.brand} &gt; {product.name}
          </p>
          <img src={product.image} className="product-img" />
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
                  allStars += item.stars;
                  counter++;
                  return (
                    <>
                      <div className="commentary" key={id}>
                        <IoPersonCircleOutline className="profile-icon" />
                        <div>
                          <p className="profile-name">{item.username}</p>
                          <p className="rate-time">
                            {formatDate(item.created_at)}
                          </p>
                          <div>
                            {(() => {
                              const stars = [];
                              const filledStars = Math.round(item.stars);
                              const totalStars = 5;
                              for (let i = 0; i < totalStars; i++) {
                                if (i < filledStars) {
                                  stars.push(
                                    <FaStar className="star-icon" key={i} />
                                  );
                                } else {
                                  stars.push(
                                    <FaRegStar className="star-icon" key={i} />
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
        </div>
        <div className="item-information">
          <div>
            <div className="logo">
              <img src="/apple.png" alt="" />
              <p>{product.brand}</p>
            </div>
            <h1 className="product-name">{product.name}</h1>
            <div>
              {(() => {
                const stars = [];
                const filledStars = Math.round(allStars / counter);
                const totalStars = 5;
                for (let i = 0; i < totalStars; i++) {
                  if (i < filledStars) {
                    stars.push(<FaStar className="star-icon" key={i} />);
                  } else {
                    stars.push(<FaRegStar className="star-icon" key={i} />);
                  }
                }
                return (
                  <p>
                    {stars} {counter} Avaliações
                  </p>
                );
              })()}
            </div>
            <h1 className="price">R$ {product.price}</h1>
            <p className="ship">
              <BsTruck />
              Frete Grátis{" "}
            </p>
            <div className="function-btns">
              {click ? (
                <p>Produto Adicionado Ao Carrinho!</p>
              ) : (
                <button onClick={addToCart} className="add-cart-btn">
                  <BsCart4 />
                  Adicionar ao Carrinho
                </button>
              )}
              <button onClick={addToWishList} className="fav-btn">
                <IoMdHeartEmpty />
              </button>
            </div>
            <ModalForm
              getProduct={getProduct}
              getComments={getComments}
              product={product}
              className="add-rate"
            />
          </div>
        </div>
      </div>
    </>
  );
}

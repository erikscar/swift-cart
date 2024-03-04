import "./style.css";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegStar, FaStar, FaCartPlus, FaMoneyBill1Wave } from "react-icons/fa6";

export default function ProductCard({ products }) {
  const productsFoundContext = useOutletContext()
  const clearSearchValues = productsFoundContext[4]

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
        // Ordenando por Popularidade = Estrelas / Comentários
        .sort((a, b) => {
          const rateA = (a.total_stars || 0) / (a.total_comments || 1);
          const rateB = (b.total_stars || 0) / (b.total_comments || 1);
          return rateB - rateA;
        })
        .map((product, id) => {
          const rate = product.total_stars / product.total_comments;

          return (
            <div className="product-card" key={id}>
              <Link to={`/${product.product_id}`} onClick={clearSearchValues}>
                <img
                  src={product.image}
                  className="product-card-img"
                  alt="product-card"
                />
              </Link>
              <span className="product-name text-align-center">{product.name}</span>
              <p className="product-desc">{product.description}</p>
              <div className="price-star-wrapper">
                <p>R$ {product.price}</p>

                {/*Função para Apresentar Estrelas Completas ou Incompletas de Acordo com a Avaliação(rate)*/}
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
                    <div className="rate-wrapper">
                      {isNaN(rate) ? "0.0" : rate.toFixed(2)} {stars}
                    </div>
                  );
                })()}
              </div>
              <div className="product-btn-wrapper">
                <button onClick={() => addToCart(product.product_id)} className="cart-btn">
                  <FaCartPlus /> Carrinho
                </button>
                <button className="buy-btn">
                  <FaMoneyBill1Wave /> Comprar
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

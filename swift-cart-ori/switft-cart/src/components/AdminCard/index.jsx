import "./index.css"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { FaRegStar, FaTrashCan } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";


export default function AdminCard({ products, getProducts }) {
    const deleteProduct = async (productId) => {
        try {
            axios.delete(`http://localhost:8800/products/${productId}`)
            getProducts()
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {products
                .sort((a, b) => {
                    const rateA = (a.total_stars || 0) / (a.total_comments || 1);
                    const rateB = (b.total_stars || 0) / (b.total_comments || 1);
                    return rateB - rateA;
                })
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
                                <button><BiSolidEdit /> Atualizar</button>
                                <button onClick={() => deleteProduct(product.product_id)}><FaTrashCan /> Excluir</button>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

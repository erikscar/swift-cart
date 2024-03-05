import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRegStar, FaTrashCan } from "react-icons/fa6";
import AdminForm from "../Forms/adminForm";
import { toast } from "react-toastify";


export default function AdminCard({ products, getProducts }) {

    const deleteProduct = async (productId) => {
        try {
            await axios.delete(`http://localhost:8800/products/${productId}`)
            toast.warning("Produto Excluído com Sucesso");
            getProducts()
        } catch (error) {
            console.error(error)
        }
    }

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
                            <Link to={`/${product.product_id}`}>
                                <img
                                    src={product.image}
                                    className="product-card-img"
                                    alt="product-card"
                                />
                            </Link>
                            <span className="product-name-card text-align-center">{product.name}</span>
                            <p className="product-desc is-grey">{product.description}</p>
                            <div className="price-star-wrapper">
                                <p>R$ {product.price}</p>
                                {/*Função para Apresentar Estrelas Completas ou Incompletas de Acordo com a Avaliação(rate)*/}
                                {(() => {
                                    const stars = [];
                                    const filledStars = Math.round(rate);
                                    const totalStars = 5;
                                    for (let i = 0; i < totalStars; i++) {
                                        if (i < filledStars) {
                                            stars.push(<FaStar color="#fdc62e" size={22} key={i} />);
                                        } else {
                                            stars.push(<FaRegStar size={22} key={i} />);
                                        }
                                    }
                                    return (
                                        <div className="stars-wrapper">
                                            {isNaN(rate) ? "0.0" : rate.toFixed(2)} {stars}
                                        </div>
                                    );
                                })()}
                            </div>
                            <div className="product-btn-wrapper">
                                <AdminForm onEdit={true} productToUpdate={product} productId={product.product_id} getProducts={getProducts} />
                                <button onClick={() => deleteProduct(product.product_id)} className="delete-btn"><FaTrashCan /> Excluir</button>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}

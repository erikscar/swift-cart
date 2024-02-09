import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { FaTrash } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

export default function Cart() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [setProducts]);

  const subtotal = products.reduce((acum, product) => acum + product.price, 0);

  return (
    <>
      <Header />

      <h1 className="cart-title">Produtos do Carrinho</h1>
      <div className="cart-container">
        <table cellSpacing="50">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Marca</th>
              <th className="quantity">Quantidade</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, id) => (
              <tr key={id}>
                <td className="product-image-wrapper">
                  <img src={product.image} />
                  <div>
                    <p>{product.name}</p>
                    <div className="icon-wrapper">
                      <FaTrash />
                      <p className="is-grey">Remover Item</p>
                    </div>
                    <div className="icon-wrapper">
                      <IoMdHeartEmpty className="is-red" />
                      <p className="is-grey">Adicionar aos Favoritos</p>
                    </div>
                  </div>
                </td>
                <td>TUF Gaming</td>
                <td className="quantity">1</td>
                <td>R$ {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="order-container">
          <h1>Resumo do Pedido</h1>
          <div className="order-info-wrapper subtotal">
            <p>SubTotal: </p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <div className="order-info-wrapper">
            <p>Entrega: </p>
            <p>Grátis</p>
          </div>

          <div className="order-info-wrapper">
            <p>Total: </p>
            <p>R$ {subtotal.toFixed(2)}</p>
          </div>

          <button className="finish-order-btn">Finalizar Compra</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { useRef, useState } from "react";
import "./index.css";
import { FaStar } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";

export default function ModalForm({ className, oneProduct, getProduct }) {
  const [modal, setModal] = useState(false);
  const [starsValue, setStarsValue] = useState(0);
  const ref = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleStars = (value) => {
    console.log("Valor inicial de starsValue:", starsValue);
    setStarsValue(value);
    console.log("Valor atual de starsValue:", starsValue);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log(oneProduct);
    const rate = ref.current;
    try {
      await axios.post(`http://localhost:8800/${oneProduct.product_id}`, {
        user: rate.user.value,
        content: rate.content.value,
        stars: starsValue,
      });
      getProduct();
    } catch (error) {
      console.error(error);
    }
    toggleModal();
  };

  return (
    <>
      <button className={className} onClick={toggleModal}>
        <FaStar className="star-icon" />
        Adicionar Avaliação
      </button>
      {modal && (
        <form ref={ref} className="form-modal">
          <div className="modal-overlay">
            <div className="form-content">
              <div className="close-btn-wrapper">
                <TiDeleteOutline className="close-btn" onClick={toggleModal} />
              </div>
              <h1>
                <FaStar className="star-icon" /> Faça sua Avaliação!{" "}
                <FaStar className="star-icon" />
              </h1>
              <label htmlFor="">Nome: </label>
              <input type="text" name="user" />
              <label htmlFor="">Avaliação:</label>
              <textarea name="content" id="" cols="30" rows="10"></textarea>
              <p>Estrelas: </p>
              {[1, 2, 3, 4, 5].map((value) => (
                <FaStar key={value} onClick={() => handleStars(value)} />
              ))}
              <div className="save-btn-wrapper">
                <button onClick={(ev) => handleSubmit(ev)} className="save-btn">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

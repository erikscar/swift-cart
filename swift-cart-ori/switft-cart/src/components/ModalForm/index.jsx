import { useRef, useState } from "react";
import "./index.css";
import { FaStar } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios";
import { toast, Slide } from "react-toastify";

export default function ModalForm({ className, getComments, product }) {
  const [modal, setModal] = useState(false);
  const [starsValue, setStarsValue] = useState(0);
  const ref = useRef();

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleStars = (value) => {
    setStarsValue(value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const rate = ref.current;
    try {
      const res = await axios.post(
        `http://localhost:8800/comments/${product.product_id}`,
        {
          username: rate.username.value,
          content: rate.content.value,
          stars: starsValue,
        }
      );
      toast.success(res.data);
      getComments();
      toggleModal();
    } catch (error) {
      toast.error("Erro ao inserir avaliação");
    }
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
              <input type="text" name="username" />
              <label htmlFor="">Avaliação:</label>
              <textarea name="content" id="" cols="30" rows="10"></textarea>
              <div class="rating">
                <input type="radio" name="star" id="star1" />
                <label for="star1" onClick={() => handleStars(5)}></label>
                <input type="radio" name="star" id="star2" />
                <label for="star2" onClick={() => handleStars(4)}></label>
                <input type="radio" name="star" id="star3" />
                <label for="star3" onClick={() => handleStars(3)}></label>
                <input type="radio" name="star" id="star4" />
                <label for="star4" onClick={() => handleStars(2)}></label>
                <input type="radio" name="star" id="star5" />
                <label for="star5" onClick={() => handleStars(1)}></label>
              </div>
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

import "./style.css";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaStar, FaWindowClose } from "react-icons/fa";

export default function RateForm({ getComments, product }) {
  const [modal, setModal] = useState(false);
  const [starsValue, setStarsValue] = useState(0);
  const ref = useRef();

  const toggleModal = () => {
    setModal(prevmodal => !prevmodal);
  };

  const handleStars = (value) => {
    setStarsValue(value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const rate = ref.current;

    if (
      !rate.username.value ||
      !rate.content.value ||
      !starsValue
    ) {
      toast.error("Por Favor, Preencha Todos os Campos")
      return
    }

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
      setStarsValue(0)
    } catch (error) {
      toast.error("Erro ao inserir avaliação");
    }
  };

  return (
    <>
      <button className="add-rate" onClick={toggleModal}>
        <FaStar color="#fdc62e" />
        Adicionar Avaliação
      </button>
      {modal && (
        <form ref={ref} className="form-modal text-align-center" >
          <div className="modal-overlay" >
            <div className="form-content" >
              <div className="close-btn-wrapper">
                <FaWindowClose size={35} className="close-btn" onClick={toggleModal} />
              </div>
              <h1 className="form-title">FAÇA SUA AVALIAÇÃO</h1>

              <input type="text" name="username" placeholder="Nome do Usuário..." />
              <textarea name="content" cols="30" rows="10" placeholder="Comentário..."></textarea>

              <div class="rating">
                <div className="form-stars">
                  <label for="star5">
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                  </label>
                  <input type="radio" name="star" id="star5" onClick={() => handleStars(5)} />
                </div>
                <div className="form-stars">
                  <label for="star4">
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                  </label>
                  <input type="radio" name="star" id="star4" onClick={() => handleStars(4)} />
                </div>
                <div className="form-stars">
                  <label for="star3">
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                  </label>
                  <input type="radio" name="star" id="star3" onClick={() => handleStars(3)} />
                </div>
                <div className="form-stars">
                  <label for="star2">
                    < FaStar color="#fdc62e" size={25} />
                    < FaStar color="#fdc62e" size={25} />
                  </label>
                  <input type="radio" name="star" id="star2" onClick={() => handleStars(2)} />
                </div>
                <div className="form-stars">
                  <label for="star1">
                    < FaStar color="#fdc62e" size={25} />
                  </label>
                  <input type="radio" name="star" id="star1" onClick={() => handleStars(1)} />
                </div>
              </div>
              <button onClick={(ev) => handleSubmit(ev)} className="save-btn">
                Salvar
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}

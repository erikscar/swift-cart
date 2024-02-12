import { useRef, useState } from "react"
import "./index.css"
import { FaStar } from "react-icons/fa6"
import { TiDeleteOutline } from "react-icons/ti";
import axios from "axios"

export default function ModalForm({ className, oneProduct, getProduct }) {
  const [modal, setModal] = useState(false)
  const ref = useRef()


  const toggleModal = () => {
    setModal(!modal)
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    console.log(oneProduct)
    const rate = ref.current
    try {
      await axios.post(`http://localhost:8800/${oneProduct.product_id}`, {
        user: rate.user.value,
        content: rate.content.value
      })
      getProduct()
    } catch (error) {
      console.error(error)
    }
    toggleModal()
  }

  return (
    <>
      <button className={className} onClick={toggleModal}>
        <FaStar className="star-icon" />Adicionar Avaliação</button>
      {modal && (
        <form ref={ref} className="form-modal">
          <div className="modal-overlay">
            <div className="form-content">
              <div className="close-btn-wrapper">
                <TiDeleteOutline className="close-btn" onClick={toggleModal} />
              </div>
              <h1>
                <FaStar className="star-icon" /> Faça sua Avaliação! <FaStar className="star-icon" />
              </h1>
              <label htmlFor="">Nome: </label>
              <input type="text" name="user" />
              <label htmlFor="">Avaliação:</label>
              <textarea name="content" id="" cols="30" rows="10"></textarea>
              <div className="save-btn-wrapper">
                <button onClick={(ev) => handleSubmit(ev)} className="save-btn">Salvar</button>
              </div>
            </div>
          </div>
        </form>
      )}

    </>
  )
}
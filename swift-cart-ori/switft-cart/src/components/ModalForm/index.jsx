import { useRef, useState } from "react"
import "./index.css"
import { FaStar } from "react-icons/fa6"
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
              <div>
                <label htmlFor="">Nome: </label>
                <input type="text" name="user" />
              </div>
              <label htmlFor="">Avaliação:</label>
              <textarea name="content" id="" cols="30" rows="10"></textarea>
              <button onClick={(ev) => handleSubmit(ev)}>Salvar</button>
              <button onClick={toggleModal}>Cancelar</button>
            </div>
          </div>
        </form>
      )}

    </>
  )
}
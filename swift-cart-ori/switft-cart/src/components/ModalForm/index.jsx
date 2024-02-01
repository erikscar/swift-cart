import { useState } from "react"
import "./index.css"
export default function ModalForm() {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <>
      <button onClick={toggleModal}>Registrar Mais Vendidos</button>
      {modal && (
        <div className="form-modal">
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="form-content">
              <input type="text" />
              <input type="text" />
              <button>Salvar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
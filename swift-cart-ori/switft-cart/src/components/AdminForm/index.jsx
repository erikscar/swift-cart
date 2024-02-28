import { useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const AdminForm = () => {
    const [modal, setModal] = useState(false);
    const ref = useRef();

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            <button className="add-product-btn" onClick={toggleModal}>
                Adicionar Produto
            </button>
            {modal && (
                <form ref={ref} className="form-modal">
                    <div className="modal-overlay">
                        <div className="form-content">
                            <div className="close-btn-wrapper">
                                <TiDeleteOutline className="close-btn" onClick={toggleModal} />
                            </div>
                            <label htmlFor="">Nome: </label>
                            <input type="text" name="username" />
                            <div className="save-btn-wrapper">
                                <button onClick={(ev) => handleSubmit(ev)} className="save-btn">
                                    Salvar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>)
}

export default AdminForm

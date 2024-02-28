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
                            <input type="text" name="name" placeholder="Nome.." />
                            <input type="text" name="description" placeholder="Descrição..." />
                            <input type="text" name="image" placeholder="URL da Imagem..." />
                            <input type="text" name="price" placeholder="Preço..." />
                            <input type="text" name="brand" placeholder="Marca..." />
                            <input type="text" name="category" placeholder="Categoria..." />
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

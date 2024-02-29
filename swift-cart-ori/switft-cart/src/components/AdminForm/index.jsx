import { useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "./index.css"
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const AdminForm = ({ getProducts, onEdit, productId }) => {
    const [modal, setModal] = useState(false);
    const ref = useRef();

    const postProduct = async (ev) => {
        const form = ref.current
        ev.preventDefault()
        try {
            await axios.post("http://localhost:8800/products", {
                name: form.name.value,
                description: form.description.value,
                image: form.image.value,
                price: form.price.value,
                brand: form.brand.value,
                category: form.category.value
            })
            getProducts()
            toggleModal()
        } catch (error) {
            console.error(error)
        }
    }

    const updateProduct = async (ev) => {
        const form = ref.current
        ev.preventDefault()
        try {
            axios.put(`http://localhost:8800/products/${productId}`, {
                name: form.name.value,
                description: form.description.value,
                image: form.image.value,
                price: form.price.value,
                brand: form.brand.value,
                category: form.category.value
            })
            getProducts()
            toggleModal()
        } catch (error) {
            console.log(error)
        }
    }

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <>
            {onEdit ? (
                <button onClick={toggleModal}>
                    <FaEdit /> Atualizar
                </button>
            ) : <button className="add-product-btn" onClick={toggleModal}>
                Adicionar Produto
            </button >}
            {
                modal && (
                    <form ref={ref} className="form-modal">
                        <div className="modal-overlay">
                            <div className="form-content">
                                <div className="close-btn-wrapper">
                                    <TiDeleteOutline className="close-btn" onClick={toggleModal} />
                                </div>
                                <h1>Adicionar Produto</h1>
                                <input type="text" name="name" placeholder="Nome.." />
                                <input type="text" name="description" placeholder="Descrição..." />
                                <input type="text" name="image" placeholder="URL da Imagem..." />
                                <input type="text" name="price" placeholder="Preço..." />
                                <input type="text" name="brand" placeholder="Marca..." />
                                <input type="text" name="category" placeholder="Categoria..." />
                                <div className="save-btn-wrapper">
                                    {onEdit ? (
                                        <button onClick={(ev) => updateProduct(ev)} className="save-btn">
                                            Atualizar
                                        </button>
                                    ) : <button onClick={(ev) => postProduct(ev)} className="save-btn">
                                        Salvar
                                    </button>}

                                </div>
                            </div>
                        </div>
                    </form>
                )
            }
        </>)
}

export default AdminForm

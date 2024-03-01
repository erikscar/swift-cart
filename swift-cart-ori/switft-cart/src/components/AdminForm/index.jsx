import { useEffect, useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "./index.css"
import axios from "axios";
import { FaEdit } from "react-icons/fa";

const AdminForm = ({ getProducts, onEdit, productId, productToUpdate }) => {
    const [modal, setModal] = useState(false);
    const [shouldCloseModal, setShouldCloseModal] = useState(false); // Novo estado

    const ref = useRef();

    useEffect(() => {
        if (shouldCloseModal) {
            setModal(false);
            setShouldCloseModal(false);
        }
    }, [shouldCloseModal]);

    const postProduct = async (ev) => {
        const form = ref.current;
        ev.preventDefault();
        try {
            await axios.post("http://localhost:8800/products", {
                name: form.name.value,
                description: form.description.value,
                image: form.image.value,
                price: form.price.value,
                brand: form.brand.value,
                category: form.category.value
            });
            getProducts();
            setShouldCloseModal(true)
        } catch (error) {
            console.error(error);
        }
    };

    const updateProduct = async (ev) => {
        const form = ref.current;
        ev.preventDefault();
        try {
            await axios.put(`http://localhost:8800/products/${productId}`, {
                name: form.name.value,
                description: form.description.value,
                image: form.image.value,
                price: form.price.value,
                brand: form.brand.value,
                category: form.category.value
            });
            getProducts();
            setShouldCloseModal(true);
        } catch (error) {
            console.log(error);
        }
    };

    const toggleModal = () => {
        setModal((prevModal) => !prevModal);
    };

    return (
        <>
            {onEdit ? (
                <button onClick={toggleModal}>
                    <FaEdit /> Atualizar
                </button>
            ) : (
                <button className="add-product-btn" onClick={toggleModal}>
                    Adicionar Produto
                </button>
            )}

            {modal && (
                <form ref={ref} className="form-modal">
                    <div className="modal-overlay">
                        <div className="form-content">
                            <div className="close-btn-wrapper">
                                <TiDeleteOutline className="close-btn" onClick={toggleModal} />
                            </div>
                            <h1>Adicionar Produto</h1>
                            <input type="text" name="name" placeholder="Nome.." defaultValue={onEdit ? productToUpdate.name : ""} />
                            <input type="text" name="description" placeholder="Descrição..." defaultValue={onEdit ? productToUpdate.description : ""} />
                            <input type="text" name="image" placeholder="URL da Imagem..." defaultValue={onEdit ? productToUpdate.image : ""} />
                            <input type="number" name="price" placeholder="Preço..." defaultValue={onEdit ? productToUpdate.price : ""} />
                            <select name="brand" id="brand">
                                <option selected disabled>Marca</option>
                                <option value="Logitech">Logitech</option>
                                <option value="Razer">Razer</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Acer">Acer</option>
                                <option value="LG">LG</option>
                                <option value="Dell">Dell</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Redragon">Redragon</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Sony">Sony</option>
                                <option value="Xbox">Xbox</option>
                            </select>
                            <select name="category" id="category">
                                <option value="" selected disabled>Categorias</option>
                                <option value="Mouses">Mouses</option>
                                <option value="Celulares">Celulares</option>
                                <option value="Monitores">Monitores</option>
                                <option value="Notebooks">Notebooks</option>
                                <option value="Fones de Ouvido">Fones de Ouvido</option>
                                <option value="Controles">Controles</option>
                            </select>
                            <div className="save-btn-wrapper">
                                {onEdit ? (
                                    <button onClick={(ev) => updateProduct(ev)} className="save-btn">
                                        Atualizar
                                    </button>
                                ) : (
                                    <button onClick={(ev) => postProduct(ev)} className="save-btn">
                                        Salvar
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default AdminForm;

import "./style.css"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FaEdit, FaWindowClose } from "react-icons/fa";

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
            toast.success("Produto Cadastrado com Sucesso");
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
            toast.success("Produto Atualizado com Sucesso");
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
                <button onClick={toggleModal} className="update-btn">
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
                                <FaWindowClose size={35} className="close-btn" onClick={toggleModal} />
                            </div>
                            {onEdit ? (
                                <h1 className="form-title">ATUALIZAR PRODUTO</h1>
                            ) : (
                                <h1 className="form-title">ADICIONAR PRODUTO</h1>
                            )}
                            <div className="form-input-wrapper">
                                <label htmlFor="">Nome: </label>
                                <input type="text" name="name" placeholder="Nome.." defaultValue={onEdit ? productToUpdate.name : ""} />
                            </div>
                            <div className="form-input-wrapper">
                                <label htmlFor="">Descrição: </label>
                                <input type="text" name="description" placeholder="Descrição..." defaultValue={onEdit ? productToUpdate.description : ""} />
                            </div>
                            <div className="form-input-wrapper">
                                <label htmlFor="">Imagem: </label>
                                <input type="text" name="image" placeholder="URL da Imagem..." defaultValue={onEdit ? productToUpdate.image : ""} />
                            </div>
                            <div className="form-input-wrapper">
                                <label htmlFor="">Preço: </label>
                                <input type="number" name="price" placeholder="Preço..." defaultValue={onEdit ? productToUpdate.price : ""} />
                            </div>
                            <div className="form-input-wrapper">
                                <label htmlFor="">Marca</label>
                                <select name="brand" id="brand" className="select-form">
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
                            </div>
                            <div className="form-input-wrapper">
                                <label htmlFor="">Categoria</label>
                                <select name="category" id="category" className="select-form">
                                    <option value="" selected disabled>Categorias</option>
                                    <option value="Mouses">Mouses</option>
                                    <option value="Celulares">Celulares</option>
                                    <option value="Monitores">Monitores</option>
                                    <option value="Notebooks">Notebooks</option>
                                    <option value="Fones de Ouvido">Fones de Ouvido</option>
                                    <option value="Controles">Controles</option>
                                </select>
                            </div>


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

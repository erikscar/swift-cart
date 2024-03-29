import "./style.css"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import CheckboxFilter from "../../components/checkboxFilter";
import ProductCard from "../../components/IndividualCards/productCard"

export default function Search() {
  const productsFoundContext = useOutletContext();
  const [initialProducts, setInitialProducts] = useState([...productsFoundContext[0]]);
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const setProductFound = productsFoundContext[2];

  const handleFilter = (ev, stars) => {
    if (ev.target.checked) {
      const filterProducts = initialProducts.filter(
        (product) =>
          Math.round(product.total_stars / product.total_comments) === stars
      );
      if (filterProducts.length > 0) setProductFound(filterProducts);
      else toast.error("Não Há Produtos Pesquisados com essa Avaliação");
    } else {
      setProductFound(initialProducts);
    }
  };

  const handlePriceFilter = () => {
    const filterProducts = initialProducts.filter(
      (product) => product.price <= maxValue && product.price >= minValue
    );
    if (maxValue < minValue)
      toast.error("O Valor Mínimo Excede o Valor Máximo Mude o Preço");
    if (filterProducts.length > 0) {
      setProductFound(filterProducts);
    } else {
      toast.error("Nenhum Produto Encontrado nessa Faixa de Preço");
      setProductFound(initialProducts);
    }
  };

  return (
    <>
      <div className="search-page-container">
        <aside className="text-align-center">
          <p className="filter-title">Categoria</p>
          <CheckboxFilter name="Mouses" filter="category" />
          <CheckboxFilter name="Celulares" filter="category" />
          <CheckboxFilter name="Monitores" filter="category" />
          <CheckboxFilter name="Notebooks" filter="category" />
          <CheckboxFilter name="Fones de Ouvido" filter="category" />
          <CheckboxFilter name="Controles" filter="category" />

          <div className="filter-wrapper">
            <p className="filter-title">Marca</p>
            <CheckboxFilter name="Logitech" filter="brand" />
            <CheckboxFilter name="Razer" filter="brand" />
            <CheckboxFilter name="Apple" filter="brand" />
            <CheckboxFilter name="Samsung" filter="brand" />
            <CheckboxFilter name="Acer" filter="brand" />
            <CheckboxFilter name="LG" filter="brand" />
            <CheckboxFilter name="Dell" filter="brand" />
            <CheckboxFilter name="Lenovo" filter="brand" />
            <CheckboxFilter name="Redragon" filter="brand" />
            <CheckboxFilter name="Xiaomi" filter="brand" />
            <CheckboxFilter name="Sony" filter="brand" />
            <CheckboxFilter name="Xbox" filter="brand" />
          </div>

          <p className="filter-title">Avaliação</p>
          <div className="input-wrapper">
            <input
              type="checkbox"
              onClick={(ev) => handleFilter(ev, 5)}
            />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              onClick={(ev) => handleFilter(ev, 4)}
            />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar />
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              onClick={(ev) => handleFilter(ev, 3)}
            />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              onClick={(ev) => handleFilter(ev, 2)}
            />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              onClick={(ev) => handleFilter(ev, 1)}
            />
            <FaStar color="#f9c522" />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>

          <p className="filter-title">Preço <MdAttachMoney /></p>
          <div className="price-input-wrapper">
            <input
              type="number"
              placeholder="Máximo"
              className="price-input"
              value={maxValue}
              onChange={(ev) => setMaxValue(ev.target.value)}
            />
            <input
              type="number"
              placeholder="Mínimo"
              className="price-input"
              value={minValue}
              onChange={(ev) => setMinValue(ev.target.value)}
            />
            <button className="search-btn" onClick={handlePriceFilter}>
              Pesquisar
            </button>
          </div>
        </aside>

        <div className="items-container">
          <h1 className="search-text">Você Pesquisou por: "{productsFoundContext[1]}"</h1>

          <div className="product-card-container max-height">
            <ProductCard products={productsFoundContext[0]} />
          </div>
        </div>
      </div>
    </>
  );
}

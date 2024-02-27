import SellCard from "../components/SellCard";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import CheckboxFilter from "../components/CheckboxFilter";

export default function Search() {
  const searchContext = useOutletContext();

  return (
    <>
      <div className="main-container">
        <aside>
          <p>Categoria</p>
          <CheckboxFilter name="Mouses" filter="category" />
          <CheckboxFilter name="Celulares" filter="category" />
          <CheckboxFilter name="Monitores" filter="category" />
          <CheckboxFilter name="Notebooks" filter="category" />
          <CheckboxFilter name="Fones de Ouvido" filter="category" />
          <CheckboxFilter name="Controles" filter="category" />

          <p>Marca</p>
          <CheckboxFilter name="HyperX" filter="brand" />
          <CheckboxFilter name="TUF Gaming" filter="brand" />
          <CheckboxFilter name="Xiaomi" filter="brand" />
          <CheckboxFilter name="Logitech" filter="brand" />

          <p>Avaliação</p>
          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <FaStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
            <FaRegStar color="#f9c522" />
          </div>

          <p>Preço</p>

          <div className="input-price-wrapper">
            <input type="text" placeholder="Máximo" className="price-input" />
            <MdAttachMoney className="price-icon" />
            <input type="text" placeholder="Minimo" className="price-input" />
            <MdAttachMoney className="price-icon-2" />
          </div>
        </aside>

        <div className="items-container">
          <h1>Você Pesquisou por: "{searchContext[1]}"</h1>

          <div className="order-section">
            <p>Ordenar: </p>
            <select name="" id="">
              <option selected disabled>
                Popularidade
              </option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>
            <select name="" id="">
              <option selected disabled>
                Preço
              </option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>
            <select name="" id="">
              <option selected disabled>
                Recém Adicionados
              </option>
              <option value="">Crescente</option>
              <option value="">Decrescente</option>
            </select>
          </div>
          <div className="sell-card-container">
            <SellCard products={searchContext[0]} />
          </div>
        </div>
      </div>
    </>
  );
}

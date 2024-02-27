import { useState } from "react";
import SellCard from "../components/SellCard";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

export default function Search() {
  const searchContext = useOutletContext();
  const [initialProducts, setInitialProducts] = useState([...searchContext[0]]);
  const setFound = searchContext[2]

  const handleFilter = (ev, filter, filterName) => {
    if (ev.target.checked) {
      console.log(initialProducts)
      const filterProducts = initialProducts.filter(p => p[filter] === filterName)
      if (filterProducts.length > 0) setFound(filterProducts)
      else toast.error("Não Há Produtos Pesquisados nessa Categoria!")

    } else {
      setFound(initialProducts)
    }
  }

  return (
    <>
      <div className="main-container">
        <aside>
          <p>Categoria</p>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" onClick={(ev) => handleFilter(ev, "category", "Mouses")} />
            <label htmlFor="">Mouses</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="teste" onClick={(ev) => handleFilter(ev, "category", "Celulares")} />
            <label htmlFor="">Celulares</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" onClick={(ev) => handleFilter(ev, "category", "Monitores")} />
            <label htmlFor="">Monitores</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" onClick={(ev) => handleFilter(ev, "category", "Notebooks")} />
            <label htmlFor="">Notebooks</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" onClick={(ev) => handleFilter(ev, "category", "Fones de Ouvido")} />
            <label htmlFor="">Fones de Ouvido</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" onClick={(ev) => handleFilter(ev, "category", "Controles")} />
            <label htmlFor="">Controles</label>
          </div>

          <p>Marca</p>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">HyperX</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">TUF Gaming</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Xiaomi</label>
          </div>

          <div className="input-wrapper">
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Logitech</label>
          </div>

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

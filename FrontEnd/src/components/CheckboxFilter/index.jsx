import "./style.css"
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

function CheckboxFilter({ name, filter }) {
  const productsFoundContext = useOutletContext();
  const [initialProducts, setInitialProducts] = useState([...productsFoundContext[0]]);
  const setProductFound = productsFoundContext[2]

  const handleFilter = (ev) => {
    if (ev.target.checked) {
      const filterProducts = initialProducts.filter(p => p[filter] === name)
      if (filterProducts.length > 0) setProductFound(filterProducts)
      else toast.error("Não Há Produtos Pesquisados nesse Filtro!")

    } else {
      setProductFound(initialProducts)
    }
  }

  return (
    <div className="input-wrapper">
      <input type="checkbox" name={name} onClick={(ev) => handleFilter(ev)} />
      <label>{name}</label>
    </div>
  )
}

export default CheckboxFilter

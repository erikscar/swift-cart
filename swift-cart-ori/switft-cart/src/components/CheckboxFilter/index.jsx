import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

function CheckboxFilter({ name, filter }) {
  const searchContext = useOutletContext();
  const [initialProducts, setInitialProducts] = useState([...searchContext[0]]);
  const setFound = searchContext[2]

  const handleFilter = (ev) => {
    if (ev.target.checked) {
      const filterProducts = initialProducts.filter(p => p[filter] === name)
      if (filterProducts.length > 0) setFound(filterProducts)
      else toast.error("Não Há Produtos Pesquisados nesse Filtro!")

    } else {
      setFound(initialProducts)
    }
  }

  return (
    <div className="input-wrapper">
      <input type="checkbox" name={name} id="" onClick={(ev) => handleFilter(ev)} />
      <label htmlFor="">{name}</label>
    </div>
  )
}

export default CheckboxFilter

import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function DepartmentsNav({ setProductFound, setSearchValue }) {
  const handleChange = (e) => {
    getProductByCategory(e.target.value);
  };

  const clearSearchValues = () => {
    setProductFound([]);
    setSearchValue("");
  };

  const getProductByCategory = async (category) => {
    try {
      const res = await axios.get(
        "http://localhost:8800/products/searchCategory",
        {
          params: {
            category: category,
          },
        }
      );
      if (res.data.length !== 0) {
        setProductFound(res.data);
        setSearchValue(category);
      } else {
        toast.error(`Não foi Encontrado Produtos com a Categoria "${category}"`)
      }
    } catch (error) {
      toast.error("Ocorreu um Erro Inesperado")
    }
  };

  return (
    <div className="departments-nav">
      <select
        name=""
        id=""
        className="department-select"
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option value="" disabled selected>
          Departamentos
        </option>
        <option value="Mouses">Mouses</option>
        <option value="Celulares">Celulares</option>
        <option value="Monitores">Monitores</option>
        <option value="Notebooks">Notebooks</option>
        <option value="Fones de Ouvido">Fones de Ouvido</option>
        <option value="Controles">Controles</option>
      </select>
      <Link to="/releases" onClick={clearSearchValues}>Lançamentos</Link>
      <Link to="/popular" onClick={clearSearchValues}>Mais Populares</Link>
      <Link to="/plans" onClick={clearSearchValues}>Seja Swift!</Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

export default function DepartmentsNav({ setFound, setSearchValue }) {
  const handleChange = (e) => {
    getProductByCategory(e.target.value);
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
      setFound(res.data);
      setSearchValue(category);
    } catch (error) {}
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
      <Link to="/releases">Lançamentos</Link>
      <Link to="/popular">Mais Populares</Link>
      <Link to="/plans">Seja Swift!</Link>
    </div>
  );
}

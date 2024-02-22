import { Link } from "react-router-dom";
import "./index.css";
import { BsList } from "react-icons/bs";

export default function DepartmentsNav() {
  return (
    <div className="departments-nav">
      <a href="">
        <BsList /> Departamentos
      </a>
      <Link to="/releases">Lançamentos</Link>
      <Link to="/popular">Mais Populares</Link>
      <Link to="/plans">Seja Swift!</Link>
    </div>
  );
}

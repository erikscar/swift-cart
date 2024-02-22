import { Link } from "react-router-dom";
import "./index.css";
import { BsList } from "react-icons/bs";

export default function DepartmentsNav() {
  return (
    <div className="departments-nav">
      <a href="">
        <BsList /> Departamentos
      </a>
      <a href="/releases">Lançamentos</a>
      <a href="">Mais Populares</a>
      <a href="">Ofertas do Dia</a>
      <Link to="/plans">Seja Swift!</Link>
    </div>
  );
}

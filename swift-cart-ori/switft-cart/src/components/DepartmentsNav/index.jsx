import "./index.css"
import { BsList } from "react-icons/bs";


export default function DepartmentsNav() {
  return (
    <div className="departments-nav">
      <a href=""><BsList /> Departamentos</a>
      <a href="">Lançamentos</a>
      <a href="">Mais Populares</a>
      <a href="">Ofertas do Dia</a>
      <a href="">Marcas</a>
      <a href="">Seja Swift!</a>
    </div>
  )
}
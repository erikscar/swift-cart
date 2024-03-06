import "./style.css";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

export default function Card() {
  const productsFoundContext = useOutletContext();
  const setProductFound = productsFoundContext[2]
  const setSearchValue = productsFoundContext[3]

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

  const handleCategory = (e) => {
    getProductByCategory(e.target.value)
  };

  return (
    <>
      <div className="mouse-card">
        <img src="/mouse.png" alt="mouse-img" />
        <div className="mouse-card-desc">
          <h1>Faça Seus</h1>
          <h2>Clicks</h2>
          <h3>MOUSE</h3>
          <button value="Mouses" onClick={(e) => handleCategory(e)}>
            Navegar
          </button>
        </div>
      </div>

      <div className="phone-card">
        <img src="/phone.png" alt="phone-img" className="phone-img" />
        <div className="phone-card-desc">
          <h1>Procure</h1>
          <h2>Pelos</h2>
          <h3>CELULARES</h3>
          <button value="Celulares" onClick={(e) => handleCategory(e)}>Navegar</button>
        </div>
      </div>

      <div className="monitor-card ">
        <img src="/monitor.png" alt="monitor-img" className="monitor-img" />
        <div className="monitor-card-desc">
          <h1>MELHORES</h1>
          <h2>Dispositivos</h2>
          <h3>MONITORES</h3>
          <button value="Monitores" onClick={(e) => handleCategory(e)}>Navegar</button>
        </div>
      </div>

      <div className="notebook-card ">
        <img src="/notebook.png" alt="mouse-img" className="notebook-img" />
        <div className="notebook-card-desc">
          <h1>Mais</h1>
          <h2>Populares</h2>
          <h3>NOTEBOOKS</h3>
          <button value="Notebooks" onClick={(e) => handleCategory(e)}>Navegar</button>
        </div>
      </div>

      <div className="earphone-card">
        <img src="/earphone.png" alt="earphone-img" />
        <div className="earphone-card-desc">
          <h1>Escute</h1>
          <h2>Músicas</h2>
          <h3>FONES</h3>
          <button value="Fones de Ouvido" onClick={(e) => handleCategory(e)}>Navegar</button>
        </div>
      </div>

      <div className="control-card">
        <img src="/control.png" alt="control-img" />
        <div className="control-card-desc">
          <h1>Divirta-se</h1>
          <h2>Jogue</h2>
          <h3>CONTROLES</h3>
          <button value="Controles" onClick={(e) => handleCategory(e)}>Navegar</button>
        </div>
      </div>
    </>
  );
}

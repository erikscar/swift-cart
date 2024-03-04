import "./index.css";
import { FaCheck } from "react-icons/fa";
import Search from "../SearchPage/search.jsx";
import { useOutletContext } from "react-router-dom";

function Plans() {
  const searchContext = useOutletContext()
  return (
    <>
      {searchContext[0].length === 0 ? (
        <div className="cards-container">
          <div className="plan-card">
            <h1 className="essencial">Essencial</h1>
            <div className="advantages-container">
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Hospedagem do site inclusa.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Até 50 Produtos Listados.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Suporte Técnico por Email.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Personalização Básica da Página Inicial.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Integração com Redes Sociais.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Template Responsivo para Dispositivos Móveis.
              </p>
              <button className="plan-btn">Compre Agora</button>
            </div>
          </div>
          <div className="plan-card">
            <h1 className="enchanced">Aprimorado</h1>
            <div className="advantages-container">
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Hospedagem Premium.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Até 200 Produtos Listados.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Suporte Técnico Prioritário.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Personalização Avançada.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Integração com Sistemas de Pagamento.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Relátorios de Vendas e Análises.
              </p>
              <button className="plan-btn">Compre Agora</button>
            </div>
          </div>
          <div className="plan-card">
            <h1 className="premium">Premium</h1>
            <div className="advantages-container premium-card">
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Hospedagem Premium + Segurança.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Produtos Ilimitados.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Suporte Técnico 24/7.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Personalização Completa.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Integração com Sistemas de Pagamento.
              </p>
              <p>
                <FaCheck fontSize={25} color="#34e868" />
                Relátorios Detalhados de Vendas.
              </p>
              <button className="plan-btn">Compre Agora</button>
            </div>
          </div>
        </div>
      ) : (
        <Search />
      )}
    </>
  );
}

export default Plans;

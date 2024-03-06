import { useOutletContext } from "react-router-dom";
import { PiSmileySadDuotone } from "react-icons/pi";
import ProductCard from "../../components/IndividualCards/productCard.jsx"
import SearchPage from "../SearchPage/search.jsx";
import useProductsCRUD from "../../hooks/useProductsCRUD.js";

function Popular() {
  const { products } = useProductsCRUD("http://localhost:8800/products/popular")
  const productsFoundContext = useOutletContext()
  const productsFound = productsFoundContext[0]

  return (
    <>
      {productsFound.length === 0 ? (
        <>
          {products.length === 0 ? (
            <div className="blank-products">
              <h1>Parece que não há Produtos Cadastrados! <PiSmileySadDuotone /></h1>
              <p>Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
            </div>
          ) :
            <>
              <h1 className="section-title text-align-center">OS PRODUTOS MAIS POPULARES</h1>
              <div className="product-card-container">
                <ProductCard products={products} />
              </div>
            </>
          }
        </>
      ) : (
        <SearchPage />
      )}
    </>
  );
}

export default Popular;

import { useEffect, useState } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { PiSmileySadDuotone } from "react-icons/pi";
import ProductCard from "../../components/IndividualCards/productCard.jsx"
import SearchPage from "../SearchPage/search.jsx";
import useFetchProducts from "../../hooks/useProductsCRUD.js";

function Release() {
  const lastRelease = useFetchProducts("http://localhost:8800/products/releases")
  const searchContext = useOutletContext()

  return (
    <>
      {searchContext[0].length === 0 ? (
        <>
          {lastRelease.length === 0 ? (
            <div className="blank-products">
              <h1>Parece que não há Produtos Cadastrados! <PiSmileySadDuotone /></h1>
              <p>Fique tranquilo, em breve teremos uma seleção incrível de produtos esperando por você.</p>
            </div>
          ) :
            <>
              <h1 className="section-title text-align-center">OS LANÇAMENTOS MAIS RECENTES</h1>
              <div className="product-card-container">
                <ProductCard products={lastRelease} />
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

export default Release;

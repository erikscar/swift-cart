import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";

export default function SearchInput({ setFound, setSearchValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const searchProducts = async () => {
    try {
      const res = await axios.get(`http://localhost:8800/products/search`, {
        params: {
          searchInput: inputValue,
        },
      });
      if (res.data.length !== 0) {
        setFound(res.data);
        setSearchValue(inputValue);
        setInputValue("");
      } else {
        toast.error("Nenhum Produto Encontrado!", {
          position: "top-center",
          toastId: 13,
          className: "toast",
          theme: "colored",
          autoClose: 2500,
          transition: Slide,
          closeOnClick: true,
        });
        setInputValue("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="search-input-wrapper">
        <input
          type="text"
          name=""
          id=""
          placeholder="Encontre Produtos..."
          value={inputValue}
          onChange={(e) => handleChange(e)}
        />
        <div>
          <IoSearchOutline
            onClick={() => searchProducts()}
            className="search-icon"
          />
        </div>
      </div>
    </>
  );
}

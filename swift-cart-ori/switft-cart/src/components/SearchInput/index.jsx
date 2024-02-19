import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
export default function SearchInput() {
  const [inputValue, setInputValue] = useState("")
  const [products, setProducts] = useState([])

  useEffect(() => { }, [products])

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const searchProducts = async (searchInput) => {
    try {
      const res = await axios.get(`http://localhost:8800/products`, {
        params: {
          searchInput: searchInput
        }
      })
      setProducts(res.data)
      setInputValue("")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="search-input-wrapper">
      <input type="text" name="" id="" placeholder="Encontre Produtos..."
        value={inputValue}
        onChange={(e) => handleChange(e)} />
      <IoSearchOutline onClick={() => searchProducts(inputValue)} />
    </div>
  )
}
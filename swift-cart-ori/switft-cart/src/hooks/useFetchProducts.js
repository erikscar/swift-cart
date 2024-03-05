import axios from "axios"
import { useEffect, useState } from "react"

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProducts()
  })

  return products
}




export default useFetchProducts
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const useFetchProducts = (url) => {
  const [products, setProducts] = useState([])

    const getProducts = async () => {
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    const deleteProducts = async (url) => {
        try {
          await axios.delete(url)
          .then(({ data }) => toast.warning(data))
          getProducts();
        } catch (error) {
          toast.error("Erro ao excluir item do carrinho");
        }
    }
    
    useEffect(() => {
      getProducts()
    }, [url])

  return { products, deleteProducts}
}




export default useFetchProducts
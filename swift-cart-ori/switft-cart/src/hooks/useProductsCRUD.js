import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

const useProductsCRUD = (url) => {
  const [products, setProducts] = useState([])
  const [comments, setComments] = useState([])


    const getProducts = async () => {
      try {
        const res = await axios.get(url);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    const getComments = async () => {
      try {
        const res = await axios.get(url)
        setComments(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    const postProducts = async(url, id) => {
      try {
        await axios.post(url, {
          product_id: id
        })
        .then(({data}) => toast.success(data))
      } catch (error) {
        toast.error("Ocorreu um Erro Inesperado ao Tentar Adicionar o Produto")
      }
    }

    const deleteProducts = async (url) => {
        try {
          await axios.delete(url)
          .then(({ data }) => toast.warning(data))
          getProducts();
        } catch (error) {
          toast.error("Ocorreu um Erro Inesperado Durante a Exclusão");
        }
    }
    
    useEffect(() => {
      getProducts(),
      getComments()
    }, [url])

  return { products, comments, deleteProducts, postProducts}
}

export default useProductsCRUD
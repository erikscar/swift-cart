import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
import SellCard from "../../components/SellCard"
import AdminForm from "../../components/AdminForm"
const Admin = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const res = await axios.get("http://localhost:8800/products")
            setProducts(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const postProduct = async () => {
        try {
            await axios.post("http://localhost:8800/products", {

            })
        } catch (error) {

        }
    }

    useEffect(() => {
        getProducts()
    }, [setProducts])

    return (
        <>
            <div className="logo">
                <img src="/logo.png" alt="logo-img" className="logo-img" />
                <h1>SwiftCart</h1>
            </div>
            <div className="admin-container">
                <AdminForm />
                <div className="sell-card-container">
                    <SellCard products={products} />
                </div>
            </div>
        </>
    )
}

export default Admin

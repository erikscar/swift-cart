import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
import AdminForm from "../../components/AdminForm"
import AdminCard from "../../components/AdminCard"
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
                <AdminForm products={products} getProducts={getProducts} />
                <div className="sell-card-container">
                    <AdminCard products={products} getProducts={getProducts} />
                </div>
            </div>
        </>
    )
}

export default Admin

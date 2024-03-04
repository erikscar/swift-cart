import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
import AdminForm from "../../components/adminForm"
import AdminCard from "../../components/adminCard"
import { Link } from "react-router-dom"

const Admin = () => {
    const [products, setProducts] = useState([])
    const [productId, setProductId] = useState(0)

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
                <Link to="/">
                    <img src="/logo.png" alt="logo-img" className="logo-img" />
                    <h1>SwiftCart</h1>
                </Link>
            </div>
            <div className="admin-container">
                <h1 className="best-seller-title last-release">Página do Administrador</h1>
                <AdminForm products={products} getProducts={getProducts} />
                <div className="sell-card-container">
                    <AdminCard products={products} getProducts={getProducts} setProductId={setProductId} />
                </div>
            </div>
        </>
    )
}

export default Admin

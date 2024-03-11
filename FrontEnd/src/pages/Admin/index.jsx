import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import AdminForm from "../../components/Forms/adminForm.jsx"
import AdminCard from "../../components/IndividualCards/adminCard.jsx"

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
            <div className="admin-logo">
                <Link to="/">
                    <img src="/logo.png" alt="logo-img" className="logo-img" />
                    <h1>SwiftCart</h1>
                </Link>
            </div>
            <div className="admin-container">
                <h1 className="section-title">PÁGINA DO ADMINISTRADOR</h1>
                <AdminForm products={products} getProducts={getProducts} />
                <div className="product-card-container">
                    <AdminCard products={products} getProducts={getProducts} />
                </div>
            </div>
        </>
    )
}

export default Admin

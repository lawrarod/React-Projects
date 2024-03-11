import { useState, useEffect } from "react"
import { Card } from "../components/Card.jsx"

export const ShoppingPage = () => {

    const [products, setProudcts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProudcts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>

            <h2>Products</h2><hr />
            {
                products.map(product => (
                    <Card
                        key={product.id}
                        imagen={product.image}
                        titulo={product.title}
                        descripcion={product.description}
                        precio={product.price}
                    ></Card>
                ))
            }
        </>
    )
}

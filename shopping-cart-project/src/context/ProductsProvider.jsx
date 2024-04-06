/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { ProductsContext } from './ProductsContext.jsx'
// https://fakestoreapi.com/products
export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const res = await fetch('https://api.escuelajs.co/api/v1/products')
            const data = await res.json()
            setProducts(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

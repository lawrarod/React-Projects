import { useContext } from "react"
import { Card } from "../components/Card.jsx"
import { ProductsContext } from '../context/ProductsContext.jsx'
import { PurchaseContext } from '../context/PurchaseContext.jsx'

export const ShoppingPage = () => {

    const { products } = useContext(ProductsContext)
    const { shoppingList, addProduct, deleteProduct, increaseQuantity, decreaseQuantity } = useContext(PurchaseContext)

    return (
        <>

            <h2>Products</h2><hr />
            {
                products.map(product => (
                    <Card
                        key={product.id}
                        image={product.category.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                    ></Card>
                ))
            }
        </>
    )
}

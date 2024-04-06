import { useContext } from 'react'
import { PurchaseContext } from '../context/PurchaseContext'


export const PurchasePage = () => {

    const { shoppingList, addProduct, deleteProduct, increaseQuantity, decreaseQuantity } = useContext(PurchaseContext)

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppingList.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >-</button>
                                    <button className="btn btn-primary">{item.quantity}</button>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => increaseQuantity(item.id)}
                                    >+</button>
                                </td>
                                <td><button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => deleteProduct(item.id)}
                                >Eliminar
                                </button>
                                </td>
                            </tr>
                        ))
                    }

                    <th><b>TOTAL: </b></th>
                    <td></td>
                    <td></td>
                    <td>${calcularTotal()}</td>

                </tbody>
            </table>

            <div className="d-grid gap-2">
                <button
                    className="btn btn-primary"
                    onClick={handleImpresion}
                    disabled={listaCompras < 1}

                >COMPRAR</button>
            </div>
        </>
    )
}

import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CartPage } from "./pages/CartPage"
import { ShoppingPage } from "./pages/ShoppingPage"

export const ShoppingApp = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className="container">
                <Routes>
                    <Route path='/' element={<ShoppingPage></ShoppingPage>}></Route>
                    <Route path='/carrito' element={<CartPage></CartPage>}></Route>
                    <Route path='/*' element={<Navigate to='/' />}></Route>
                </Routes>
            </div>
        </>
    )
}

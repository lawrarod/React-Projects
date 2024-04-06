import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ShoppingPage } from './pages/ShoppingPage'
import { PurchasePage } from './pages/PurchasePage'
import { ProductsProvider } from './context/ProductsProvider'
import { PurchaseProvider } from './context/PurchaseProvider'

export const StoreApp = () => {
    return (
        <ProductsProvider>
            <PurchaseProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<ShoppingPage></ShoppingPage>}></Route>
                        <Route path='/cart' element={<PurchasePage></PurchasePage>}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </PurchaseProvider>
        </ProductsProvider>
    )
}

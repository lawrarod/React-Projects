import { Footer } from '../../components/footer/Footer'
import { Menu } from '../../components/menu/Menu'
import { Navbar } from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <main>
            <Navbar />
            <div className="container">
                <div className="menuContainer"><Menu /></div>
                <div className="contentContainer"><Outlet /></div>
            </div>
            <Footer />
        </main>
    )
}

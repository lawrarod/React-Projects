import { useState } from 'react'
import './navbar.scss'
// import geometrico from './geometrico.png'

export const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <nav>
            <div className="left">
                <a href="/" className='logo'>
                    <img src='/assets/images/geometrico.png' />
                    <span>FineEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>

            <div className="right">
                <a href="/">Sign In</a>
                <a href="/" className='register'>Sign Up</a>
                <div className="menuIcon">
                    <img src="/assets/images/menu-icon.png" alt="hamburguer menu icon" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign In</a>
                    <a href="/">Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

import { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    const [open, setOpen] = useState(false)
    const user = true

    return (
        <nav>
            <div className="left">
                <Link to="/" className='logo'>
                    <img src='/assets/images/geometrico.png' />
                    <span>FineEstate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>

            <div className="right">
                {user
                    ? (
                        <div className='user'>
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="User's profile picture" />
                            <span>John Doe</span>
                            <Link to='/profile' className='profile'>
                                <div className="notification">3</div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    )
                    : (<>
                        <Link to="/">Sign In</Link>
                        <Link to="/" className='register'>Sign Up</Link>
                    </>)}
                <div className="menuIcon">
                    <img src="/assets/images/menu-icon.png" alt="hamburguer menu icon" onClick={() => setOpen(!open)} />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">Agents</Link>
                    <Link to="/">Sign In</Link>
                    <Link to="/">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

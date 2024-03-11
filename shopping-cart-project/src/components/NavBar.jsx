import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { Link, NavLink } from "react-router-dom"
/* eslint-disable react/no-unescaped-entities */
export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand" href="#">Lawra's Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link active" aria-current="page" href="#">Shopping</NavLink>
              </li>
            </ul>
            <NavLink to='/carrito'>
              <Badge badgeContent={4} color="secondary">
                <ShoppingCart />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

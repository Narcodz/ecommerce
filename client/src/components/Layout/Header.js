import React from 'react'
import { NavLink, Link } from "react-router-dom"
import { useAuth } from '../../context/auth'
import  toast  from 'react-hot-toast'

function Header() {
  const [auth, setAuth] = useAuth()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token:""
    })
    localStorage.removeItem("auth");
    toast.success("Logout Successfully",  { delay: 1000 })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            🛒 Ecommerce App
          </Link>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category" className="nav-link" >Category</NavLink>
            </li>
            {!auth.user ? (
            <>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" >Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" >Login</NavLink>
              </li>
            </>
            ):(<>
                <li className="nav-item">
                <NavLink onClick={handleLogout} to="/login" className="nav-link" >Logout</NavLink>
              </li>
            </>)}
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" >Cart (0)</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Header
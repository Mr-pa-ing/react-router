import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './auth/auth'

const Navbar = () => {
    const auth = useAuth();

    const styleNavbar = ({isActive}) => {
        return {
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }

  return (
    <nav className='primary-nav'>
        <NavLink style={styleNavbar} to="/">Home</NavLink>
        <NavLink style={styleNavbar} to="/about">About</NavLink>
        <NavLink style={styleNavbar} to="/product">Product</NavLink>
        <NavLink style={styleNavbar} to="/profile">Profile</NavLink>
        {
          !auth.user && <NavLink style={styleNavbar} to="/login">Login</NavLink>
        }
    </nav>
  )
}

export default Navbar
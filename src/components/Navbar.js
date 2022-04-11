import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
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
    </nav>
  )
}

export default Navbar
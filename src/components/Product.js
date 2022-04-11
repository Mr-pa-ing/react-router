import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div>
        <input type="search" name='search' placeholder='Search for products' /><br/><br/>
        <nav>
            <NavLink to="featured">featured</NavLink>
            <NavLink to="new">New</NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Product;
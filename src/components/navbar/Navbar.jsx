import React from 'react'
import { NavbarUI, NavIcon } from './NavbarStyles'
import { HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi';


const Navbar = () => {
  return (
        <NavbarUI>
                <NavIcon><HiOutlineHome /></NavIcon>
                <NavIcon><HiOutlineUser /></NavIcon>
                <NavIcon><HiOutlineShoppingCart /></NavIcon>
                <NavIcon><HiOutlineSearch /></NavIcon>
                <NavIcon><HiOutlineMenu /></NavIcon>
        </NavbarUI>
  )
}

export default Navbar


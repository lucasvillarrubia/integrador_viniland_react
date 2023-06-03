import React from 'react'
import { ToolbarUI, NavIcon } from './NavbarStyles'
import { HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi';


const Toolbar = () => {
  return (
        <ToolbarUI>
                <NavIcon><HiOutlineShoppingCart /></NavIcon>
                <NavIcon><HiOutlineUser /></NavIcon>
                <NavIcon><HiOutlineHome /></NavIcon>
                <NavIcon><HiOutlineSearch /></NavIcon>
                <NavIcon><HiOutlineMenu /></NavIcon>
        </ToolbarUI>
  )
}

export default Toolbar


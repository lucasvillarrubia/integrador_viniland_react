import React from 'react'
import { ToolbarUI, NavIcon } from './NavbarStyles'
import { HiOutlineHome, HiOutlineMenu, HiOutlineSearch, HiOutlineUser, HiOutlineShoppingCart } from 'react-icons/hi';


const Toolbar = () => {
  return (
        <ToolbarUI>
                <NavIcon><HiOutlineMenu /></NavIcon>
                <NavIcon><HiOutlineSearch /></NavIcon>
                <NavIcon><HiOutlineHome /></NavIcon>
                <NavIcon><HiOutlineUser /></NavIcon>
                <NavIcon><HiOutlineShoppingCart /></NavIcon>
        </ToolbarUI>
  )
}

export default Toolbar


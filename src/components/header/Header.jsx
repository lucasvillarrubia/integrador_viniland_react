import React, { useContext } from 'react';
import { MenuContext } from '../../context/Context';
import BarsMenu from '../menu/Menu';
import {
  LastNavbarItem,
  Logo,
  Navbar,
  NavbarItem,
  NavbarList,
  StyledHeader,
} from './HeaderStyles';

const Header = () => {
  const ctx = useContext(MenuContext);

  return (
    <>
      <StyledHeader>
        <Logo src='./images/logo.png' alt='Logo' />
        <Navbar isOpen={ctx.isMenuOpen}>
          <NavbarList>
            <NavbarItem>Inicio</NavbarItem>
            <NavbarItem>Categorias</NavbarItem>
            <NavbarItem>Productos</NavbarItem>
            <LastNavbarItem>COMPRAR</LastNavbarItem>
          </NavbarList>
        </Navbar>
        <BarsMenu />
      </StyledHeader>
    </>
  );
};

export default Header;

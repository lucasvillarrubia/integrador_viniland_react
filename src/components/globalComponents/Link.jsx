import React from 'react';
import { ContainerLinkStyled, LinkUI } from './GlobalComponents';

const Link = ({ radius = '32', to = '/' }) => {
  return (
    <ContainerLinkStyled whileTap={{ scale: 0.95 }}>
      <LinkUI radius={radius} to={to}>
        <span> Volver </span>
      </LinkUI>
    </ContainerLinkStyled>
  );
};

export default Link;
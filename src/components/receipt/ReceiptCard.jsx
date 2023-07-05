import React from 'react';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './ReceiptCardStyles';

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png'
          alt='La Aco'
        />
        <div>
          <h3>La Aco</h3>
          <p>Cheta la gorra</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>3U</p>
        <ProductPriceStyled>0</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;

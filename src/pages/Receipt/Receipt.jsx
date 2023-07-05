import React from 'react';

import CardResumen from '../../components/receipt/ReceiptCard';
import Link from '../../components/globalComponents/Link';

import { CostoEnvioStyled, CostoProductoStyled, CostoTotalStyled, HrStyled, ProductsContainerStyled, ResumenContainerInfoStyled, ResumenContainerStyled, ResumenTitleStyled } from './ReceiptStyles';

const Resumen = () => {
  return (
    <ResumenContainerStyled>
      <ResumenTitleStyled>
        <h1>Resumen Orden: #001</h1>
        <Link borderRadius='20' to='/mis-ordenes'></Link>
      </ResumenTitleStyled>
      <h2>Productos:</h2>
      <ProductsContainerStyled>
        <CardResumen />
      </ProductsContainerStyled>
      <HrStyled />
      <ResumenContainerInfoStyled>
        <h3>Costos:</h3>
        <CostoProductoStyled>
          <p>Costo de productos</p>
          <span></span>
        </CostoProductoStyled>
        <CostoEnvioStyled>
          <p>Costo de envío</p>
          <span></span>
        </CostoEnvioStyled>
        <CostoTotalStyled>
          <p>Total</p>
          <span></span>
        </CostoTotalStyled>
      </ResumenContainerInfoStyled>
    </ResumenContainerStyled>
  );
};

export default Resumen;

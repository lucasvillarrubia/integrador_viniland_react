import React from 'react';

import MyOrdersCards from '../../components/myOrders/MyOrders';
import Button from '../../components/globalComponents/Button';

import { MisOrdenesBtnContainerStyled, MisOrdenesContainerStyled, MisOrdenesPatternStyled, MisOrdenesTitleStyled } from './MyOrdersStyles';

const MyOrders = () => {
  return (
    <>
      <MisOrdenesContainerStyled>
        <MisOrdenesTitleStyled>Mis órdenes</MisOrdenesTitleStyled>
        <MyOrdersCards />
        <MisOrdenesBtnContainerStyled>
          <Button>Volver a comprar</Button>
        </MisOrdenesBtnContainerStyled>
      </MisOrdenesContainerStyled>
      <MisOrdenesPatternStyled src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png' alt='' />
    </>
  );
};

export default MyOrders;

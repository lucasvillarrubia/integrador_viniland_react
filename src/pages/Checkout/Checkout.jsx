import React from 'react';

import CheckoutForm from '../../components/checkout/CheckoutForm';
import ProductsCheckout from '../../components/checkout/CheckoutCard';
import { ContainerCheckoutStyled } from './CheckoutStyles';

const Checkout = () => {
  return (
    <div>
      <ContainerCheckoutStyled>
        <CheckoutForm />
        <ProductsCheckout />
      </ContainerCheckoutStyled>
    </div>
  );
};

export default Checkout;

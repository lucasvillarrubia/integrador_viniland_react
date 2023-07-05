
import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../globalComponents/Count';
import Increase from '../globalComponents/Increase';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  QuantityContainerStyled,
  TextStyled,
} from './CheckoutStyles';

const CardProductCheckout = ({ img, price, title, desc, quantity }) => {
  return (
    <CardContainerStyled>
      <img src={img} alt={title} />
      <CardInfoStyled>
        <ProductTitleStyled>{title}</ProductTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{price}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase bgColor='var(--btn-gradient-secondary)'>
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;

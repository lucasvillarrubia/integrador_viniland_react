import { useNavigate } from 'react-router-dom';

import {
  IdStyled,
  PedidoContainerStyled,
  PriceStyled,
  TextContainerStyled,
  TitleStyled,
} from './MyOrdersCardStyles';

const CardMisOrdenes = ({ createdAt, status, total, _id }) => {
  const navigate = useNavigate();
  return (
    <PedidoContainerStyled onClick={() => navigate(`/resumen/${_id}`)}>
      <TextContainerStyled>
        <TitleStyled>ID de la orden: #{_id.slice(0, 7)}</TitleStyled>
        <IdStyled>Fecha {createdAt}hs</IdStyled>
        <PriceStyled>{total}</PriceStyled>
      </TextContainerStyled>
    </PedidoContainerStyled>
  );
};

export default CardMisOrdenes;

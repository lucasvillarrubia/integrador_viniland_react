import { useSelector } from 'react-redux';
import Loader from '../globalComponents/Loader';
import CardMisOrdenes from './MyOrdersCard';
import { MisOrdenesContainerStyled } from './MyOrdersCardStyles';

const MyOrdersCards = () => {
  const { orders, loading, error } = useSelector(state => state.orders);

  if (loading && !orders) {
    return <Loader styles={{ height: '50px', width: '50px' }} />;
  }

  if (error) {
    return <h2 style={{ textAlign: 'center', maxWidth: '550px' }}>{error}</h2>;
  }

  return (
    <MisOrdenesContainerStyled>
      {orders?.length ? (
        orders.map(order => <CardMisOrdenes key={order._id} {...order} />)
      ) : (
        <h2>Que esperas para hacer un pedido</h2>
      )}
    </MisOrdenesContainerStyled>
  );
};

export default MyOrdersCards;

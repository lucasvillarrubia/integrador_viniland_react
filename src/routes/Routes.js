import { Routes as AllRoutes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import PasswordRecovery from '../pages/PasswordRecovery/PasswordRecovery';
import Checkout from '../pages/Checkout/Checkout';
import Success from '../pages/Success/Success';
import MyOrders from '../pages/MyOrders/MyOrders';
import Receipt from '../pages/Receipt/Receipt';
import NotFound from '../pages/NotFound/NotFound';

function Routes() {
  return (
    <AllRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/password-recovery' element={<PasswordRecovery />} />
      <Route path='/my-orders' element={<MyOrders />} />
      <Route path='/receipt/:orderId' element={<Receipt />} />
      <Route path='/success' element={<Success />} />
      <Route path='/checkout' element={<Checkout />}/>
      <Route path='*' element={<NotFound />}/>
    </AllRoutes>
  );
}

export default Routes;
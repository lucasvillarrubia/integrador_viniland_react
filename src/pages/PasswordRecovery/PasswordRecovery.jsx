import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginInput from '../../components/globalComponents/Input';
import Submit from '../../components/globalComponents/Submit';

import { ForgotContainerStyled, ForgotEmailStyled, Form } from './PasswordRecoveryStyles';

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <ForgotContainerStyled>
      <h1>Reestablece tu contraseña</h1>
        <Form>
          <LoginInput type='text' placeholder='Mail de recuperación' />
          <ForgotEmailStyled onClick={() => navigate('/login')}>
            ¿Ya te acordaste la contraseña? Volvé
          </ForgotEmailStyled>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Ingresar
          </Submit>
        </Form>
    </ForgotContainerStyled>
  );
};

export default ForgotPassword;

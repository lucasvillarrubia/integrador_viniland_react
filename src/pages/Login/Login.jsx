import React from 'react';
import { Link } from 'react-router-dom';

import LoginInput from '../../components/globalComponents/Input';
import Submit from '../../components/globalComponents/Submit';

import { Form, LoginContainerStyled, LoginEmailStyled, LoginPasswordStyled } from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <Form>
        <LoginInput name='email' type='text' placeholder='Email' />
        <LoginInput name='password' type='password' placeholder='Password' />
        <Link to='/forgot-password'>
          <LoginPasswordStyled>
            ¿Olvidaste la contraseña? Reestablecela
          </LoginPasswordStyled>
        </Link>
        <Link to='/register'>
          <LoginEmailStyled>¿No tenes cuenta? Crea una</LoginEmailStyled>
        </Link>
        <Submit>Ingresar</Submit>
        </Form>
    </LoginContainerStyled>
  );
};

export default Login;

import React from 'react';

import LoginInput from '../../components/globalComponents/Input';
import Submit from '../../components/globalComponents/Submit';
import { Form, LoginContainerStyled, LoginEmailStyled } from './SignupStyles';

const Register = () => {
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Form>
        <LoginInput type='text' placeholder='Nombre' name='name' />
        <LoginInput type='text' placeholder='Email' name='email' />
        <LoginInput type='password' placeholder='Password' name='password' />

        <LoginEmailStyled to='/login'>
          <p>¿Ya tenes cuenta? Inicia sesión</p>
        </LoginEmailStyled>
        <Submit>Registrarte</Submit>
      </Form>
    </LoginContainerStyled>
  );
};

export default Register;

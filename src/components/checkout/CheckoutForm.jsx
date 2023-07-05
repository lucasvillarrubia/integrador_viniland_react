import React from 'react';

import Input from '../globalComponents/Input';
import Submit from '../globalComponents/Submit';

import { CheckoutDatosStyled, Form } from './CheckoutStyles';

const CheckoutForm = () => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
          <Form>
            <Input
              name='name'
              htmlFor='nombre'
              type='text'
              id='nombre'
              placeholder='Tu nombre'
            >
              Nombre
            </Input>
            <Input
              name='cellphone'
              htmlFor='celular'
              type='text'
              id='celular'
              placeholder='Tu celular'
            >
              Celular
            </Input>
            <Input
              name='location'
              htmlFor='localidad'
              type='text'
              id='localidad'
              placeholder='Tu localidad'
            >
              Localidad
            </Input>
            <Input
              name='address'
              htmlFor='direccion'
              type='text'
              id='dirección'
              placeholder='Tu dirección'
            >
              Dirección
            </Input>
            <div>
              <Submit />
            </div>
          </Form>
      
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;

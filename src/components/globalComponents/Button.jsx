import React from 'react';
import { ButtonUI } from './GlobalComponents';

const Button = ({
  children,
  radius = '32',
  secondary,
  disabled = false,
  onClick = e => e.preventDefault(),
}) => {
  return (
    <ButtonUI
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      radius={radius}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
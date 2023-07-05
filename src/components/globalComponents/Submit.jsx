import React from 'react';
import { SubmitUI } from './GlobalComponents';

const Submit = ({ children, onClick, disabled = false }) => {
  return (
    <SubmitUI
      whileTap={{ scale: 0.95 }}
      disabled={disabled}
      onClick={onClick}
      type='submit'
    >
      {children}
    </SubmitUI>
  );
};

export default Submit;
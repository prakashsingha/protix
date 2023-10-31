import React from 'react';

const Button = ({ type, label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;

import React from 'react';

const RoundedTextBox = ({ value, onChange, placeholder, className }) => {
  return (
    <input
      type='text'
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default RoundedTextBox;

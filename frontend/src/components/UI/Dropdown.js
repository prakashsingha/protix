import React, { Fragment } from 'react';

function Dropdown({
  options,
  selectedOption,
  onChange,
  defaultLabel,
  id,
  value,
  className,
}) {
  const optionList = options.map((option) => (
    <option key={option[id]} value={option[id]}>
      {option[value]}
    </option>
  ));

  return (
    <Fragment>
      <select value={selectedOption} onChange={onChange} className={className}>
        <option value=''>{defaultLabel}</option>
        {optionList}
      </select>
    </Fragment>
  );
}

export default Dropdown;

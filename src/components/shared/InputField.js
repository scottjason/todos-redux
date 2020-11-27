import React from 'react';
import './InputField.scss';

const labelClass = 'visually-hidden';

const InputField = props => {
  let {
    label,
    className,
    inputType,
    inputName,
    onInputChange,
    value,
    isReadOnly,
  } = props;
  className = className ? className : 'default-input';
  return (
    <>
      <label htmlFor={label.htmlFor} className={labelClass}>
        {label.text}
      </label>
      <input
        autoComplete={'off'}
        type={inputType}
        name={inputName}
        value={value}
        className={className}
        readOnly={isReadOnly}
        onChange={e => onInputChange(inputName, e.target.value)}
      />
    </>
  );
};

export default InputField;

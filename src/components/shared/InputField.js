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
  const { htmlFor, text } = label;
  return (
    <>
      <label htmlFor={htmlFor} className={labelClass}>
        {text}
      </label>
      <input
        id={htmlFor}
        autoComplete={'off'}
        type={inputType}
        name={inputName}
        value={value}
        className={className}
        readOnly={isReadOnly}
        onChange={e => onInputChange(e.target.value)}
      />
    </>
  );
};

export default InputField;

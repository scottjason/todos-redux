import React, { forwardRef } from 'react';
import './InputField.scss';

const labelClass = 'visually-hidden';

const InputField = forwardRef((props, ref) => {
  let {
    value,
    label,
    onBlur,
    onFocus,
    onChange,
    onKeyPress,
    inputType,
    inputName,
    className,
    isReadOnly,
    defaultValue,
  } = props;
  const { htmlFor, text } = label;
  return (
    <>
      <label htmlFor={htmlFor} className={labelClass}>
        {text}
      </label>
      <input
        ref={ref}
        id={htmlFor}
        value={value}
        defaultValue={defaultValue}
        type={inputType}
        name={inputName}
        autoComplete={'off'}
        readOnly={isReadOnly}
        className={className || 'default-input'}
        onBlur={onBlur && onBlur}
        onFocus={onFocus && onFocus}
        onKeyPress={onKeyPress && onKeyPress}
        onChange={() => onChange(ref.current.value)}
      />
    </>
  );
});

export default InputField;

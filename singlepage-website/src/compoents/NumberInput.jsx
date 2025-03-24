import React, { useState, useEffect } from 'react';

const NumberInput = ({ min = 0, max = Infinity, step = 1, value, onChange }) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleDecrement = () => {
    const newValue = Math.max(min, internalValue - step);
    setInternalValue(newValue);
    onChange && onChange(newValue);
  };

  const handleIncrement = () => {
    const newValue = Math.min(max, internalValue + step);
    setInternalValue(newValue);
    onChange && onChange(newValue);
  };

  const handleChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = min;
    val = Math.max(min, Math.min(max, val));
    setInternalValue(val);
    onChange && onChange(val);
  };

  return (
    <div className="input-group flex-nowrap">
      <button className="btn btn-outline-dark" type="button" onClick={handleDecrement}>
        -
      </button>
      <input
        className="form-control text-center w-1 border-dark px-1"
        value={internalValue}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button className="btn btn-outline-dark" type="button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default NumberInput;

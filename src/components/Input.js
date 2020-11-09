import React, { useState, useRef, useEffect } from "react";

import "./Input.css";

const Input = ({
  label,
  name,
  type,
  handleFieldChange,
  className,
  id,
  placeholder,
  registerRef,
}) => {
  const [value, setValue] = useState("");
  const dataI = useRef(null);

  useEffect(() => {
    if (registerRef) {
      registerRef(name, dataI);
    }
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);

    if (handleFieldChange) {
      handleFieldChange(e.target.name, e.target.value);
    }
  };

  return (
    <div className="search-bar__input-container-small">
      <label className="search-bar__input-label" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={(className, "search-bar__input-input")}
        placeholder={placeholder}
        id={id}
        ref={dataI}
      />
    </div>
  );
};

export default Input;

import React, { useState } from "react";

const Input = ({ label, name, type, className, handleFieldChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (handleFieldChange) {
      handleFieldChange(e.target.name, e.target.value);
    }
  };

  return (
    <React.Fragment>
      <label for={label}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={className}
      />
    </React.Fragment>
  );
};

export default Input;

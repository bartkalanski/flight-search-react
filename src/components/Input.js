import React from "react";

const Input = ({ label, name, type, value, onChange, className }) => {
  return (
    <React.Fragment>
      <label for={label}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={className}
      />
    </React.Fragment>
  );
};

export default Input;

import React, { useState } from "react";

const Input = ({ label, name, type, value, getInputState, className }) => {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    depart: "",
    back: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
    getInputState(e);
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

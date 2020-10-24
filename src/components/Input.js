import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airportAutcomopleteJs from "airport-autocomplete-js";

const Input = ({
  label,
  name,
  type,
  handleFieldChange,
  className,
  dataIata,
  id,
}) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    if (handleFieldChange) {
      handleFieldChange(e.target.name, e.target.value);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <script>AirportInput("autocomplete-airport-1")</script>
        <script>AirportInput("autocomplete-airport-2")</script>
      </Helmet>
      <label for={label}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={className}
        data-iata={dataIata}
        id={id}
      />
    </React.Fragment>
  );
};

export default Input;

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import airportAutcomopleteJs from "airport-autocomplete-js";
import "./Input.css";

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
    <div className="search-bar__input-container-small">
      <Helmet>
        <script>AirportInput("autocomplete-airport-1")</script>
        <script>AirportInput("autocomplete-airport-2")</script>
      </Helmet>
      <label className="search-bar__input-label" for={label}>
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        className={(className, "search-bar__input-input")}
        data-iata={dataIata}
        id={id}
      />
    </div>
  );
};

export default Input;

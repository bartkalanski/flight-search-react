import React, { useState } from "react";
import Input from "./Input";

import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    const fromIataCode = document.querySelector("#autocomplete-airport-1")
      .dataset.iata;
    const toIataCode = document.querySelector("#autocomplete-airport-2").dataset
      .iata;
    event.preventDefault();
    if (onSubmit) {
      onSubmit(
        formValues,
        (formValues.from = fromIataCode),
        (formValues.to = toIataCode)
      );
    }
  };
  return (
    <div className="search-bar__container">
      <form onSubmit={onFormSubmit} className="search-bar__form">
        <div class="search-bar__input-container">
          <div class="search-bar__input-text">
            <Input
              label="From"
              name="from"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="From"
              dataIata="A"
              id="autocomplete-airport-1"
            />

            <Input
              label="To"
              name="to"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="To"
              dataIata="B"
              id="autocomplete-airport-2"
            />
          </div>
          <div class="search-bar__input-date">
            <Input
              label="Depart"
              name="depart"
              type="date"
              handleFieldChange={handleFormValuesChange}
              dataIata="C"
              className="Depart"
            />

            <Input
              label="Back"
              name="back"
              type="date"
              handleFieldChange={handleFormValuesChange}
              dataIata="D"
              className="Eeturn"
            />
          </div>
        </div>
        <button className="search-bar__btn">Search Flights</button>
      </form>
    </div>
  );
};

export default SearchBar;

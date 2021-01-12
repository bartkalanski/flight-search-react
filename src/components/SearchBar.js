import React, { useState, useEffect } from "react";
import airportAutcomopleteJs from "airport-autocomplete-js";
import { Helmet } from "react-helmet";
import Input from "./Input";

import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const [inputRefs, setInputRefs] = useState({});
  
  const registerRef = (name, ref) => {
    setInputRefs({
      ...inputRefs,
      [name]: ref,
    });
  };

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const getRefValue = (ref) => {
    if (ref && ref.current && ref.current.dataset.iata) {
      return ref.current.dataset.iata;
    }

    return false;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (onSubmit) {
      const valuesToSend = {
        ...formValues,
        from: getRefValue(inputRefs.from) || formValues.from,
        to: getRefValue(inputRefs.to) || formValues.to,
      };

      onSubmit(valuesToSend);
    }
  };

  return (
    <div className="search-bar__container">
      <Helmet>
        <script>
          AirportInput("autocomplete-airport-1");
          AirportInput("autocomplete-airport-2");
        </script>
      </Helmet>
      <form onSubmit={onFormSubmit} className="search-bar__form">
        <div className="search-bar__input-container">
          <div className="search-bar__input-text">
            <Input
              label="From"
              name="from"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="From"
              placeholder=""
              id="autocomplete-airport-1"

              registerRef={registerRef}
            />

            <Input
              label="To"
              name="to"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="To"
              placeholder=""
              id="autocomplete-airport-2"
              registerRef={registerRef}
            />
          </div>
          <div className="search-bar__input-date">
            <Input
              label="Depart"
              name="depart"
              type="date"
              placeholder="dd-mm-yyyy"
              handleFieldChange={handleFormValuesChange}
              className="Depart"
            />

            <Input
              label="Back"
              name="back"
              type="date"
              placeholder="dd-mm-yyyy"
              handleFieldChange={handleFormValuesChange}
              className="Return"
            />
          </div>
        </div>
        <button className="search-bar__btn" type="submit">
          Search Flights<i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

import React, { useState } from "react";
import Input from "./Input";

import "./App.css";

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
    <div className="search-bar">
      <div className="content-box ui bottom attached active tab clearing segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <div class="four fields">
              <div class="ui search field">
                <Input
                  label="From"
                  name="from"
                  type="text"
                  handleFieldChange={handleFormValuesChange}
                  className="prompt From"
                  dataIata="A"
                  id="autocomplete-airport-1"
                />
              </div>
              <div class="field">
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
              <div class="field">
                <Input
                  label="Depart"
                  name="depart"
                  type="date"
                  handleFieldChange={handleFormValuesChange}
                  dataIata="C"
                  className="Depart"
                />
              </div>
              <div class="field">
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
          </div>
          <button className="large right floated ui blue button">
            Search Flights
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

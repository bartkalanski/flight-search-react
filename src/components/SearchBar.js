import React, { useState } from "react";
import Input from "./Input";

const SearchBar = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({});

  const handleFormValuesChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(formValues);
    }
  };

  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="active item">Flights</div>
      </div>
      <div className="ui bottom attached active tab clearing segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <Input
              label="From"
              name="from"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="From"
            />
            <Input
              label="To"
              name="to"
              type="text"
              handleFieldChange={handleFormValuesChange}
              className="To"
            />
            <Input
              label="Depart"
              name="depart"
              type="date"
              handleFieldChange={handleFormValuesChange}
              className="Depart"
            />
            <Input
              label="Back"
              name="back"
              type="date"
              handleFieldChange={handleFormValuesChange}
              className="Eeturn"
            />
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

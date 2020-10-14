import React, { useState } from "react";
import Input from "./Input";

const SearchBar = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    depart: "",
    back: "",
  });

  /* const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };*/
  const getInputState = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(
      formValues.from,
      formValues.to,
      formValues.depart,
      formValues.back
    );
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
              value={formValues.from}
              getInputState={getInputState}
              className="From"
            />
            <Input
              label="To"
              name="to"
              type="text"
              value={formValues.to}
              getInputState={getInputState}
              className="To"
            />
            <Input
              label="Depart"
              name="depart"
              type="date"
              value={formValues.depart}
              getInputState={getInputState}
              className="Depart"
            />
            <Input
              label="Back"
              name="back"
              type="date"
              value={formValues.back}
              getInputState={getInputState}
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

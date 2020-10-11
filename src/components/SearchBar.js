import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    depart: "",
    back: "",
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(formValues);
  };

  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="active item">Flights</div>
      </div>
      <div className="ui bottom attached active tab clearing segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label for="from">From</label>
            <input
              name="from"
              type="text"
              value={formValues.from}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="from"
            />
            <label for="to">To</label>
            <input
              name="to"
              type="text"
              value={formValues.to}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="to"
            />
            <label for="depart">Depart</label>
            <input
              name="depart"
              type="date"
              value={formValues.depart}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="depart"
            />
            <label for="back">Return</label>
            <input
              name="back"
              type="date"
              value={formValues.back}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="return"
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

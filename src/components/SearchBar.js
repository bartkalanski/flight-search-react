import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
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
  };

  const onFormSubmit = (event) => {
    event.preventDefault()
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
            <label for="from">From</label>
            <input
              name="from"
              type="text"
              value={formValues.from}
              onChange={handleChange}
              className="from"
            />
            <label for="to">To</label>
            <input
              name="to"
              type="text"
              value={formValues.to}
              onChange={handleChange}
              className="to"
            />
            <label for="depart">Depart</label>
            <input
              name="depart"
              type="date"
              value={formValues.depart}
              onChange={handleChange}
              className="depart"
            />
            <label for="back">Return</label>
            <input
              name="back"
              type="date"
              value={formValues.back}
              onChange={handleChange}
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

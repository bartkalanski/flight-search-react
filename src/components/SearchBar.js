import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [back, setBack] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(from, to, depart, back);
  };

  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="active item">Flights</div>
      </div>
      <div className="ui bottom attached active tab clearing segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label for="fly from">From</label>
            <input
              name="fly from"
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="from"
            />
            <label for="fly to">To</label>
            <input
              name="fly to"
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="to"
            />
            <label for="departure date">Depart</label>
            <input
              name="departure date"
              type="date"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="depart"
            />
            <label for="return date">Return</label>
            <input
              name="return date"
              type="date"
              value={back}
              onChange={(e) => setBack(e.target.value)}
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

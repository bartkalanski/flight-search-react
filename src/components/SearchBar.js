import React, { useState } from "react";

const SearchBar = (props) => {
  const [from, getFrom] = useState("");
  const [to, getTo] = useState("");
  const [depart, getDepart] = useState("");
  const [back, getBack] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(from, to, depart, back);
  };

  return (
    <div>
      <div className="ui top attached tabular menu">
        <div className="active item">Flights</div>
      </div>
      <div className="ui bottom attached active tab clearing segment">
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="from">From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => getFrom(e.target.value)}
              className="from"
            />
            <label htmlFor="to">To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => getTo(e.target.value)}
              className="to"
            />
            <label htmlFor="depart">Depart</label>
            <input
              type="date"
              value={depart}
              onChange={(e) => getDepart(e.target.value)}
              className="depart"
            />
            <label htmlFor="return">Return</label>
            <input
              type="date"
              value={back}
              onChange={(e) => getBack(e.target.value)}
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

import React, { useState } from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar";
import FlightResults from "./FlightResults";
import Skyscanner from "./Skyscanner";
import date from "./Utilities/date";
import beach from "../images/beach-2.jpg";
import airportAutcomopleteJs from "airport-autocomplete-js";
import "./App.css";

const App = () => {
  const [results, setResults] = useState("");

  const onSearchSubmit = async ({ from, to, depart, back }) => {
    const { data } = await Skyscanner.get(
      `${from}/${to}/${date(depart)}/${date(back)}`
    );
    setResults(data);
  };

  return (
    <div className="ui container">
      <Logo />
      <div className="ui top attached tabular menu">
        <div className="active item">Flights</div>
      </div>
      <img
        className="ui fluid image beach-background-img"
        alt="beach"
        src={beach}
      ></img>
      <SearchBar className="search-bar" onSubmit={onSearchSubmit} />
      <FlightResults results={results} />
    </div>
  );
};

export default App;

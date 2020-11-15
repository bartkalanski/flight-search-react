import React, { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import FlightResults from "./FlightResults";
import Skyscanner from "./API/Skyscanner";
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
    <div className="app__container">
      <Logo />
      <div className="app__menu">
        <div className="app__flights">
          <i className="fas fa-plane"></i>Flights
        </div>
      </div>
      <div className="app-background__container">
        <h1 className="app-background__header">Let the journey begin</h1>
        <img className="app-background__img" alt="beach" src={beach}></img>
      </div>
      <SearchBar className="search-bar" onSubmit={onSearchSubmit} />
      <FlightResults results={results} />
    </div>
  );
};

export default App;

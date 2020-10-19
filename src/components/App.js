import React, { useState, useEffect } from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar";
import FlightResults from "./FlightResults";
import Skyscanner from "./Skyscanner";
import date from "./Utilities/date";
import axios from "axios";

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
      <SearchBar onSubmit={onSearchSubmit} />
      <FlightResults results={results} />
    </div>
  );
};

export default App;

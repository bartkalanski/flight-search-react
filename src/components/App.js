import React, { useState } from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar";
import FlightResults from "./FlightResults";
import date from "./Utilities/date";
import axios from "axios";

const App = () => {
  const [results, setResults] = useState("");
  const onSearchSubmit = async ({ from, to, depart, back }) => {
    const { data } = await axios.get(
      `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/UK/GBP/en-GB/${from}/${to}/${date(
        depart
      )}/${date(back)}`,
      {
        headers: {
          "x-rapidapi-host":
            "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "10519e3170mshfad2e75acb40046p1fdba8jsnca5e5cac79cd",
        },
      }
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

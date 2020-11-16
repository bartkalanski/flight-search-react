import React from "react";
import FlightItem from "./FlightItem/FlightItem";
import ErrorMessage from "./ErrorMessage";
import "./FlightItem/flightitem.css";

const FlightResults = ({ results }) => {
  if (results) {
    if (results.Quotes !== undefined) {
      // User submitted form and API request has been successful

      if (results.Quotes[0] !== undefined) {
        // Flights available for specified date
        return (
          <div className="results__section">
            <FlightItem
              results={results}
              outbound="Outbound"
              date={results.Quotes[0].OutboundLeg.DepartureDate}
              departure={results.Places[1].IataCode}
              arrival={results.Places[0].IataCode}
            />
            <FlightItem
              results={results}
              outbound="Inbound"
              date={results.Quotes[0].InboundLeg.DepartureDate}
              departure={results.Places[0].IataCode}
              arrival={results.Places[1].IataCode}
            />
          </div>
        );
      } else {
        // No flights available for specified date
        return (
          <ErrorMessage
            errorTop="We're sorry we haven't got any flights available on that date"
            errorBottom="Please pick another date"
          />
        );
      }
    } else {
      // User hasn't submitted the form yet
      return <React.Fragment></React.Fragment>;
    }
  } else {
    return <React.Fragment />;
  }
};
export default FlightResults;

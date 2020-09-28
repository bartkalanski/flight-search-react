import React from 'react'
import FlightItem from './FlightItem'
import flightDirection from './FlightDirection'
import ErrorMessage from './ErrorMessage'
import './flightitem.css'

const FlightResults = (props) => {

    if(props.results !== undefined){
        // Check whether form has been submitted 

        if(props.results.Quotes !== undefined){
            // User submitted form and API request has been successful 
    
            if(props.results.Quotes[0] !== undefined){
                // Flights available for specified date
         return (
            <div className="results__section">
        <FlightItem results={props.results} outbound="Outbound" date={props.results.Quotes[0].OutboundLeg.DepartureDate} departure={props.results.Places[1].IataCode} arrival={props.results.Places[0].IataCode}/>
        <FlightItem results={props.results} outbound="Inbound" date={props.results.Quotes[0].InboundLeg.DepartureDate} departure={props.results.Places[0].IataCode} arrival={props.results.Places[1].IataCode}/>
        </div>
        )
        }
        else{
            // No flights available for specified date
            return <ErrorMessage errorTop="We're sorry we haven't got any flights available on that date" errorBottom="Please pick another date"/>
        }
}
         else{ 
             // User hasn't submitted the form yet
    return <div></div>
    
}}
    else{
         // User input wrong airport code
        return <ErrorMessage errorTop="We're sorry, our input only accepts IATA airport codes" errorBottom="Please enter IATA airport code e.g JFK"/>
}

}
export default FlightResults
/* .results.Quotes[0] if(props.results.length > 0){*/
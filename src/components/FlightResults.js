import React from 'react'
import FlightItem from './FlightItem'
import flightDirection from './FlightDirection'
import './flightitem.css'
const FlightResults = (props) => {
    
    if(props.results.Quotes !== undefined){
   console.log(props.results.Quotes[0].OutboundLeg.DepartureDate)
  

    return (
        <div className="results__section">
    <FlightItem results={props.results} outbound="Outbound" date={props.results.Quotes[0].OutboundLeg.DepartureDate} departure={props.results.Places[1].IataCode} arrival={props.results.Places[0].IataCode}/>
    <FlightItem results={props.results} outbound="Inbound" date={props.results.Quotes[0].InboundLeg.DepartureDate} departure={props.results.Places[0].IataCode} arrival={props.results.Places[1].IataCode}/>
    </div>
    )
}
else{
    return <div></div>
}

}
export default FlightResults
/* .results.Quotes[0] if(props.results.length > 0){*/
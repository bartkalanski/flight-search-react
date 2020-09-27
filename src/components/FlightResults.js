import React from 'react'
import FlightItem from './FlightItem'
import './flightitem.css'
const FlightResults = (props) => {
    console.log('Flight results', props.results)
    return (
        <div className="results__section">
    <FlightItem results={props.results} outbound="Outbound"/>
    <FlightItem results={props.results} outbound="Inbound"/>
    </div>
    )

}
export default FlightResults
/* .results.Quotes[0] if(props.results.length > 0){*/
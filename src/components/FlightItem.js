import React from 'react'

const FlightItem = (props) => {

    if(props.results.Quotes !== undefined){ 
        console.log(props.results)
     return (
         <div className="ui segment results__container">
             <div className="results__header">{props.outbound}, {props.date}</div>
       
             <div className="results__flight-container">
             <div className="results__flight-airline">{props.results.Carriers[0].Name}</div>
                 <div className="results__flight-first">
                 <div className="results__flight-departure-time">18:20</div>
                 <div className="results__flight-departure-airport">{props.departure}</div>
                 </div>
                 <div className="results__flight-second">
                 <div className="results__flight-direct">{props.results.Quotes[0].Direct === true? "Direct": "Not Direct"}</div>
                 <i className="plane icon"></i>
                 </div>
                 <div className="results__flight-third">
                 <div className="results__flight-arrival-time">20:20</div>
                 <div className="results__flight-arrival-airport">{props.arrival}</div>
                 </div>
             </div>
             <div className="results__price-container">
             <div className="results__price">£{props.results.Quotes[0].MinPrice}</div>
             <button className="ui primary button results__btn">
             Select<i className="right arrow icon"></i></button>
             </div>
     
   </div>
     )}
     else{
         return <div></div>
     }
}

export default FlightItem
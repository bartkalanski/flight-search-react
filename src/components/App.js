import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import FlightResults from './FlightResults'
import date from './date'


class App extends React.Component {
    state = { results: ''}

    onSearchSubmit = async (from, to, depart, back="anytime", travellers="1") => {
    
       const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-GB/${from}-sky/${to}-sky/${date(depart)}?inboundpartialdate=${date(back)}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "10519e3170mshfad2e75acb40046p1fdba8jsnca5e5cac79cd"
        }
    }).then(response => response.json())
    .then(data => this.setState({ results: data }))

    
    }
    render() {
        return(
            <div className="ui container">
        <Logo />
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <FlightResults results={this.state.results}/>
        </div>
        )
    }
}

export default App
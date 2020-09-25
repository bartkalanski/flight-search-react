import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'


class App extends React.Component {
    state = { results: ''}

    onSearchSubmit = async (from, to) => {
        console.log('this is from', from)
        console.log('this is to', to)
       const response = await fetch(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/UK/GBP/en-GB/${from}-sky/${to}-sky/2020-10-10`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "10519e3170mshfad2e75acb40046p1fdba8jsnca5e5cac79cd"
        }
    }).then(response => response.json())
    .then(data => this.setState({ results: data }))

    console.log(this.state.results)
    }
    render() {
        return(
            <div className="ui container">
        <Logo />
        <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
        )
    }
}

export default App
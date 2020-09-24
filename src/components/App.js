import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

class App extends React.Component {
    render() {
        return(
            <div className="ui container">
        <Logo />
        <SearchBar />
        </div>
        )
    }
}

export default App
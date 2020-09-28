import React from 'react'

class SearchBar extends React.Component { 
    state= { from: '', to: '', depart: '', back: '', }

    onFormSubmit = event => {
        event.preventDefault()
        
        this.props.onSubmit(this.state.from, this.state.to, this.state.depart,this.state.back)
        

    
    }

    render(){
return (
    <div>
    <div className="ui top attached tabular menu">
  <div className="active item">Flights</div>
</div>
<div className="ui bottom attached active tab clearing segment">
<form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
            <label htmlFor="from">From</label>
            <input type="text" value={this.state.from} onChange={(e) => this.setState({ from: e.target.value })} className="from"/>
            <label htmlFor="to">To</label>
            <input type="text" value={this.state.to} onChange={(e) => this.setState({ to: e.target.value })} className="to"/>
            <label htmlFor="depart">Depart</label>
            <input type="date" value={this.state.depart} onChange={(e) => this.setState({ depart: e.target.value })} className="depart"/>
            <label htmlFor="return">Return</label>
            <input type="date" value={this.state.back} onChange={(e) => this.setState({ back: e.target.value })} className="return"/>
                </div>
                <button className="large right floated ui blue button">Search Flights</button>
            </form>
</div>
</div>)}
}

export default SearchBar
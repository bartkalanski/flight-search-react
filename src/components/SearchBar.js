import React from 'react'

const SearchBar = () => {  
return (
    <div>
    <div class="ui top attached tabular menu">
  <div class="active item">Flights</div>
</div>
<div class="ui bottom attached active tab clearing segment">
<form className="ui form">
                <div className="field">
            <label htmlFor="from">From</label>
            <input type="text" className="from"/>
            <label htmlFor="to">To</label>
            <input type="text" className="to"/>
            <label htmlFor="depart">Depart</label>
            <input type="date" className="depart"/>
            <label htmlFor="return">Return</label>
            <input type="date" className="return"/>
            <label htmlFor="travellers">Travellers</label>
            <input type="number" className="travellers"/>
                </div>
                <button className="large right floated ui blue button">Search Flights</button>
            </form>
</div>
</div>)
}

export default SearchBar
import React from 'react'
const App = (props) => {
   
    if(props.results.Quotes !== undefined){
        console.log(props.results.Quotes[0].MinPrice)
    }
    
    
    if(props.results.Quotes !== undefined){
    return (
        <div class="blue card">
    <div>Price: £{props.results.Quotes[0].MinPrice}</div>
  </div>
    )
}
else{
    return <div></div>
}
}
export default App
/* .results.Quotes[0] if(props.results.length > 0){*/
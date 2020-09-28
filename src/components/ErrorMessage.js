import React from 'react'

const ErrorMessage = (props) => { 

    return (
        <div className="ui negative message">
        <i className="close icon"></i>
        <div className="header">{props.errorTop}</div>
        <p>{props.errorBottom}</p>
        </div>)}

export default ErrorMessage
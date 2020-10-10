import React from "react";

const ErrorMessage = ({ errorTop, errorBottom }) => {
  return (
    <div className="ui negative message">
      <i className="close icon"></i>
      <div className="header">{errorTop}</div>
      <p>{errorBottom}</p>
    </div>
  );
};

export default ErrorMessage;

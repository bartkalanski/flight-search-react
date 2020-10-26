import React from "react";
import "./ErrorMessage.css";

const ErrorMessage = ({ errorTop, errorBottom }) => {
  return (
    <div className="error__container">
      <i className="error__icon"></i>
      <div className="error__header">{errorTop}</div>
      <p className="error_msg">{errorBottom}</p>
    </div>
  );
};

export default ErrorMessage;

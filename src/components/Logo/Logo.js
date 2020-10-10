import React from "react";
import logo from "../../images/skyscanner-logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo__container">
      <img src={logo} alt="skyscanner logo" className="logo__logo" />
    </div>
  );
};

export default Logo;

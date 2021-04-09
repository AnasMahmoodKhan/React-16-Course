import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import "./Logo.css";

const Logo = ({ height }) => {
  return (
    <div className="Logo" style={{ height: height }}>
      <img src={burgerLogo} alt="burger-logo" />
    </div>
  );
};

export default Logo;

import React from "react";
import burgerLogo from "../../assets/Images/burger-logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={burgerLogo} alt="burger-logo" />
    </div>
  );
};

export default Logo;

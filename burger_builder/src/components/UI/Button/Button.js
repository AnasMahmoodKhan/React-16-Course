import React from "react";
import "./Button.css";
const Button = ({ children, btnType, clicked }) => (
  <button className={`Button ${btnType}`} onClick={clicked}>
    {children}
  </button>
);

export default Button;

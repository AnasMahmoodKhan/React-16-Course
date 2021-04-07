import React from "react";
import Aux from "../../../hoc/Auxillary";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
const Modal = ({ children, show, modalClose }) => {
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClose} />
      <div
        className="Modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default Modal;

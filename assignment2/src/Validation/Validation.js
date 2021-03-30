import React from "react";

const Validation = ({ inputLength }) => {
  let validationMessage = "Text long enough";

  if (inputLength <= 5) {
    validationMessage = "Text too short";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Validation;

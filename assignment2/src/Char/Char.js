import React from "react";

const Char = ({ clicked, character }) => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center",
  };

  return (
    <div style={style} onClick={clicked}>
      {character}
    </div>
  );
};

export default Char;

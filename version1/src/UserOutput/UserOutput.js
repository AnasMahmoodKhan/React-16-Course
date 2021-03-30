import React from "react";
import "./UserOutput.css";

const UserOutput = ({ userName }) => {
  return (
    <div className="UserOutput">
      <p>Username: {userName}</p>
      <p>Some rewritable text</p>
    </div>
  );
};

export default UserOutput;

import React from "react";

const UserInput = ({ changeUsername, userName }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(evt) => changeUsername(evt.target.value)}
        value={userName}
      />
    </div>
  );
};

export default UserInput;

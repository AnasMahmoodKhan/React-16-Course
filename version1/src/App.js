import { useState } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

function App() {
  const [userName, setuserName] = useState("Anas");

  const changeUsername = (name) => {
    setuserName(name);
  };
  return (
    <div className="App">
      <UserInput userName={userName} changeUsername={changeUsername} />
      <UserOutput userName={userName} />
    </div>
  );
}

export default App;

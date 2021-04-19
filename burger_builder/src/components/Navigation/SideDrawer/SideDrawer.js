import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import "./SideDrawer.css";

const SideDrawer = () => {
  let attachedClasses = ["SideDrawer", "Close"];
  return (
    <div className={attachedClasses.join(" ")}>
      <div className="Logo">
        <Logo height="11%" />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;

import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "./Toolbar.css";

const Toolbar = ({drawerToggleClicked}) => {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={drawerToggleClicked}/>
      <Logo height="80%"/>
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;

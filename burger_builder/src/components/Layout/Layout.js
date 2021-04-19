import React, { useState } from "react";
import Aux from "../../hoc/Auxillary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

const Layout = (props) => {
  const [showSideDrawer, setshowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setshowSideDrawer(!showSideDrawer);
  };

  return (
    <Aux>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};

export default Layout;

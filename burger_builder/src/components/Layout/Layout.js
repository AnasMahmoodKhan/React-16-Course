import React from "react";
import Aux from "../../hoc/Auxillary";
import "./Layout.css";

const Layout = (props) => (
  <Aux>
    <div>Toolbar,Sidebar,Backdrop</div>
    <main className="Content">{props.children}</main>
  </Aux>
);

export default Layout;

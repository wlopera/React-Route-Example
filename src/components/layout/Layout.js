import React, { Fragment } from "react";
import MainNavegation from "./MainNavigation";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavegation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

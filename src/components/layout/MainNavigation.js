import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <section className={classes.header}>
      <div className={classes.logo}>Grandes Citas</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              Todas las citas
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Nueva cita
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainNavigation;

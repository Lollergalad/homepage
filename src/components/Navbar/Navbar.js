import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.navContainer}>
        <span className={classes.navBrand}>Navbar</span>
        <div className={classes.navLinks}>
          <ul className={classes.navLinksList}>
            <li className={classes.navItem}>
              <NavLink className={classes.navLink} to="/">
                Home
              </NavLink>
              <NavLink className={classes.navLink} to="/info">
                Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

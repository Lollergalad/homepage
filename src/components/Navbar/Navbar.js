import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Authentication";

import classes from "./Navbar.module.scss";

const Navbar = () => {
  const { signOut } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogout = () => {
    signOut(() => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };

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
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

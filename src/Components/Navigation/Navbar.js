import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import menu from "../../logo.svg";

const closeMobileNav = () => {
  const mobileNavId = document.getElementById("mobileNavId");

  if (mobileNavId.style.width === "200px") {
    mobileNavId.style.width = "0px";
  } else {
    mobileNavId.style.width = "200px";
  }
};

const resetMobileMenu = () => {
  if (window.innerWidth > 400) {
    const mobileNavId = document.getElementById("mobileNavId");
    mobileNavId.style.width = "0px";
  }
};

window.addEventListener("resize", resetMobileMenu);

function Navbar() {
  return (
    <div>
      <nav className={classes.navbar}>
        {/*    MAIN NAV */}
        <ul className={classes.navbarNav}>
          <li className={`${classes.btn} ${classes.light}`}>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li className={`${classes.btn} ${classes.light}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`${classes.btn} ${classes.light}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`${classes.btn} ${classes.light}`}>
            <Link to="/leagues">Leagues</Link>
          </li>
          <li className={`${classes.btn} ${classes.light}`}>
            <Link to="/leagues">Leagues</Link>
          </li>
        </ul>
      </nav>

      {/* SIDE NAV */}
      <Link className={classes.btnClose} to="#" onClick={closeMobileNav}>
        <img className={classes.menuImg} src={menu} alt="image"></img>
      </Link>
      <nav>
        <div className={classes.sideNav} id="mobileNavId">
          <ul className={classes.sideNavNav}>
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>{" "}
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>{" "}
            <li>
              <Link to="/leagues">Leagues</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import menu from "../../logo.svg";

const closeMobileNav = () => {
  console.log("clicked on close");

  const mobileNavId = document.getElementById("mobileNavId");
  if (mobileNavId.style.display === "none") {
    mobileNavId.style.display = "grid";
  } else {
    mobileNavId.style.display = "none";
  }
};

function Navbar() {
  return (
    <div>
      <nav className={classes.navbar}>
        {/*    MAIN NAV */}
        <ul className={classes.navbarNav}>
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
        </ul>
      </nav>

      {/* SIDE NAV */}
      <Link className={classes.btnClose} to="#" onClick={closeMobileNav}>
        <img className={classes.menuImg} src={menu} alt="image"></img>
      </Link>
      <nav className={classes.sideNav} id="mobileNavId">
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
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import menu from "../../logo.svg";
import Card from "../Cards/Cards";

// const closeMobileNav = () => {
//   const mobileNavId = document.getElementById("mobileNavId");

//   if (mobileNavId.style.width === "200px") {
//     mobileNavId.style.width = "0px";
//   } else {
//     mobileNavId.style.width = "200px";
//   }
// };

// const resetMobileMenu = () => {
//   if (window.innerWidth > 400) {
//     const mobileNavId = document.getElementById("mobileNavId");
//     mobileNavId.style.width = "0px";
//   }
// };

// window.addEventListener("resize", resetMobileMenu);

function Navbar() {
  const mainNavBar = () => {
    return (
      <div
        className={`${classes.container_max_width_100} ${classes.bg_dark} ${classes.mobile_navbar_container}`}
      >
        <div className={`${classes.container_row_height_80px}`}>
          <div className={`${classes.container_max_width_1280px}`}>
            <div className={`${classes.margin_top_20px}`}>
              <div className={`${classes.row}`}>
                <div className={`${classes.col_4}`}></div>
                <div className={`${classes.col_8}`}>
                  <div className={`${classes.navbar_container}`}>
                    <div
                      className={`${classes.navbar_row} ${classes.navbar_row_grid_gap_10px}`}
                    >
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>{" "}
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>{" "}
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>{" "}
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>{" "}
                      <div
                        className={`${classes.col_2} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}
                      >
                        <Link to="#">Leagues</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const sideNavBar = () => {
    const dummyLink = () => {
      return (
        <div className={`${classes.row} ${classes.grid_gap_10px} `}>
          <div className={`${classes.col_1}`}>
            <div
              className={`${classes.btn} ${classes.btn_primary} ${classes.btn_x_large} ${classes.navbar_button}`}
            >
              <Link to="#">Link 1</Link>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div>
        <div
          className={` ${classes.container_max_width_1280px} ${classes.mobile_side_navbar_container} ${classes.container_max_height}`}
        >
          <div className={`${classes.mobile_side_navbar_row_styling}`}>
            {dummyLink()}
            {dummyLink()}
            {dummyLink()}
            {dummyLink()}
            {dummyLink()}
            {dummyLink()}
            {dummyLink()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {mainNavBar()}

      <div>{sideNavBar()}</div>
    </div>
  );
}

export default Navbar;

// <nav className={classes.navbar}>
// {/*    MAIN NAV */}
// <ul className={classes.navbarNav}>
//   <li className={`${classes.btn} ${classes.light}`}>
//     <Link to="/leagues">Leagues</Link>
//   </li>
//   <li className={`${classes.btn} ${classes.light}`}>
//     <Link to="/about">About</Link>
//   </li>
//   <li className={`${classes.btn} ${classes.light}`}>
//     <Link to="/contact">Contact</Link>
//   </li>
//   <li className={`${classes.btn} ${classes.light}`}>
//     <Link to="/leagues">Leagues</Link>
//   </li>
//   <li className={`${classes.btn} ${classes.light}`}>
//     <Link to="/leagues">Leagues</Link>
//   </li>
// </ul>
// </nav>

// {/* SIDE NAV */}
// <Link className={classes.btnClose} to="#" onClick={closeMobileNav}>
// <img className={classes.menuImg} src={menu} alt="image"></img>
// </Link>
// <nav>
// <div className={classes.sideNav} id="mobileNavId">
//   <ul className={classes.sideNavNav}>
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>
//     <li>
//       <Link to="/about">About</Link>
//     </li>
//     <li>
//       <Link to="/contact">Contact</Link>
//     </li>
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>{" "}
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>{" "}
//     <li>
//       <Link to="/leagues">Leagues</Link>
//     </li>
//   </ul>
// </div>
// </nav>

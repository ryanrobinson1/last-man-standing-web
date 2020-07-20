import React, { Fragment } from 'react';
import classes from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import menu from '../../logo.svg';

import { routes } from '../../utilities/utils';

const resetMobileMenu = () => {
  if (window.innerWidth > 700) {
    const mobileNavId = document.getElementById('mobileNavId');
    mobileNavId.style.width = '0px';
  }
};

const closeMobileNav = () => {
  const width = '200px';
  const zero = '0px';
  const mobileNavId = document.getElementById('mobileNavId');

  if (mobileNavId.style.width === '') {
    console.log('blank');
    mobileNavId.style.width = width;
    return;
  }

  if (mobileNavId.style.width === zero) {
    mobileNavId.style.width = width;
  } else if (mobileNavId.style.width === width) {
    mobileNavId.style.width = zero;
  }
};

window.addEventListener('resize', resetMobileMenu);

function Navbar() {
  const mainNavBar = () => {
    return (
      <div className={`${classes.container_max_width_100} ${classes.bg_grey} ${classes.hide_desktop_navbar_container}`}>
        <div className={`${classes.container_row_height_100px}`}>
          <div className={`${classes.container_max_width_1280px}`}>
            <div className={`${classes.margin_top_20px}  ${classes.margin_bottom_20px}`}>
              <div className={`${classes.row}`}>
                <div className={`${classes.col_4}`}></div>
                <div className={`${classes.col_8}`}>
                  <div className={`${classes.navbar_container}`}>
                    <div className={`${classes.navbar_row} ${classes.grid_gap_10px}`}>
                      <div className={`${classes.col_1}  ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.root}>Home</Link>
                      </div>

                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.login}>Login</Link>
                      </div>
                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.register}>Register</Link>
                      </div>
                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.leagues}>Leagues</Link>
                      </div>
                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.fixtures}>Fixtures</Link>
                      </div>
                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.dataCenter}>Data</Link>
                      </div>
                      <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary} ${classes.btn_x_large}`}>
                        <Link to={routes.account}>Account</Link>
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
    return (
      <Fragment>
        <div className={` ${classes.container_max_width_1280px} ${classes.bg_dark}`}>
          <div className={`${classes.row_columns_1} ${classes.navbar_height}`}>
            <div className={`${classes.col_1}`}>
              <Link className={classes.navbar_menu_btn} to="#" onClick={closeMobileNav}>
                <img className={`${classes.img_128px} ${classes.navbar_img}`} src={menu} alt="image"></img>
              </Link>
            </div>
          </div>
        </div>

        <div className={`${classes.navbar_mobile_container}`} id="mobileNavId">
          <div className={`${classes.navbar_mobile_row}`}>
            <div className={`${classes.navbar_mobile_col_1}`}>
              <ul className={`${classes.ul}`}>
                <li>
                  <Link to={routes.root}>Home</Link>
                </li>
                <li>
                  <Link to={routes.login}>Login</Link>
                </li>
                <li>
                  <Link to={routes.register}>Register</Link>
                </li>
                <li>
                  <Link to={routes.leagues}>Leagues</Link>
                </li>
                <li>
                  <Link to={routes.fixtures}>Fixtures</Link>
                </li>
                <li>
                  <Link to={routes.data}>Coming soon.. Data</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <div id="navigation">
      {mainNavBar()}
      {sideNavBar()}
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

{
  /* <div
            className={`${classes.container_not_centered_width_1280px} ${classes.container_width_200px} ${classes.mobile_side_navbar_container} ${classes.container_max_height}`}
            id="mobileNavBody"
          >
            <div
              className={`${classes.mobile_side_navbar_row_styling}`}
              id="mobileNavBackground"
            >
              <div className={`${classes.row} ${classes.grid_gap_10px} `}>
                <div className={`${classes.col_1}`}>
                  <div>
                    <ul>
                      <li>
                        <Link to="#">Link 1</Link>
                      </li>{" "}
                      <li>
                        <Link to="#">Link 1</Link>
                      </li>{" "}
                      <li>
                        <Link to="#">Link 1</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */
}

import React from 'react';
import classes from './Footer.module.scss';
import { Link } from 'react-router-dom';
import menu from '../../../logo.svg';

import { routes } from '../../../utilities/utils';

function Footer() {
  return (
    <div id="footer">
      <div className={`${classes.container_max_width_100} ${classes.bg_grey}`}>
        <div className={`${classes.container_row_height_100}`}>
          <div className={`${classes.container_max_width_1280px}`}>
            <div className={`${classes.row}`}>
              <div className={`${classes.col_12}`}>
                <div className={`${classes.footer_container}`}>
                  <div className={`${classes.footer_row} ${classes.grid_gap_10px}`}>
                    <ul>
                      <li>
                        <Link to={routes.privacyPolicy}>Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to={routes.termsOfUse}>Terms of use</Link>
                      </li>
                      <li>
                        <Link to={routes.contactUs}>Contact Us</Link>
                      </li>
                      <li>
                        <Link to={routes.about}>About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.row_columns_1}`}>
              <img className={`${classes.img_256px}`} src={menu} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

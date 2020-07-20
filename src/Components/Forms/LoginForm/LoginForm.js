import React, { Fragment, useState } from 'react';
import classes from './LoginForm.module.scss';
import { Link } from 'react-router-dom';

import routes from '../../../utilities/utils';
import FormGroup from '../FormGroup';

function LoginForm() {
  return (
    <Fragment>
      <form className={`${classes.row_columns_1} ${classes.row_grid_gap_20px} `}>
        <h1 className={`${classes.center_align}`}>Login</h1>

        <FormGroup labelName="Email" inputName="email" inputType="Text" />

        <FormGroup labelName="Password" inputName="password" inputType="password" />

        <input className={`${classes.btn} ${classes.btn_primary}`} name="submit" type="submit"></input>
      </form>
    </Fragment>
  );
}

export default LoginForm;

{
  /* <form
        className={`${classes.row_columns_1} ${classes.row_grid_gap_20px} `}
      >
        <h1 className={`${classes.center_align}`}>Login</h1>

        <div className={`${classes.col_flex}`}>
          <label
            className={`${classes.loginForm_label} ${classes.border_control_left_10px}`}
          >
            First Name
          </label>
          <input
            className={`${classes.loginForm_input} ${classes.border_control_right_10px}`}
            name="firstName"
            type="text"
            onChange={handleChange}
            value={value}
          ></input>
        </div>

        <div className={`${classes.col_flex}`}>
          <label
            className={`${classes.loginForm_label} ${classes.border_control_left_10px}`}
          >
            Second Name
          </label>
          <input
            className={`${classes.loginForm_input} ${classes.border_control_right_10px}`}
            name="secondName"
            type="text"
            onChange={handleChange}
            value={value}
          ></input>
        </div>

        <div className={`${classes.col_flex}`}>
          <label
            className={`${classes.loginForm_label} ${classes.border_control_left_10px}`}
          >
            Email
          </label>
          <input
            className={`${classes.loginForm_input} ${classes.border_control_right_10px}`}
            name="email"
            type="text"
            onChange={handleChange}
            value={value}
          ></input>
        </div>

        <div className={`${classes.col_flex}`}>
          <label
            className={`${classes.loginForm_label} ${classes.border_control_left_10px}`}
          >
            Password
          </label>
          <input
            className={`${classes.loginForm_input} ${classes.border_control_right_10px}`}
            name="password"
            type="text"
            onChange={handleChange}
            value={value}
          ></input>
        </div>

        <input
          className={`${classes.btn} ${classes.btn_primary}`}
          name="submit"
          type="submit"
        ></input>
      </form> */
}

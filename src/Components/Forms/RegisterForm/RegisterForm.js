import React, { Fragment, useState } from "react";
import classes from "./RegisterForm.module.scss";
import { Link } from "react-router-dom";

import endpoints from "../../../utilities/utils";
import FormGroup from "../FormGroup";

function RegisterForm() {
  return (
    <Fragment>
      <form
        className={`${classes.row_columns_1} ${classes.row_grid_gap_20px} `}
      >
        <h1 className={`${classes.center_align}`}>Register</h1>

        <FormGroup
          labelName="First Name"
          inputName="firstName"
          inputType="Text"
        />
        <FormGroup
          labelName="Second Name"
          inputName="secondName"
          inputType="Text"
        />

        <FormGroup labelName="Email" inputName="email" inputType="Text" />

        <FormGroup
          labelName="Password"
          inputName="password"
          inputType="password"
        />

        <input
          className={`${classes.btn} ${classes.btn_primary}`}
          name="submit"
          type="submit"
        ></input>
      </form>
    </Fragment>
  );
}

export default RegisterForm;

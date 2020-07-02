import React from "react";
import classes from "./Login.module.scss";
import { Link } from "react-router-dom";
import menu from "../../../logo.svg";

import endpoints from "../../../utilities/utils";

function Login() {
  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col_12}`}>
          <h1>Login</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;

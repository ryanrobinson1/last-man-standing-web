import React from "react";
import classes from "./Fixtures.module.scss";
import { Link } from "react-router-dom";
import menu from "../../logo.svg";

import endpoints from "../../utilities/utils";

function Fixtures() {
  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col_12}`}>
          <h1>Fixtures</h1>
        </div>
      </div>
    </div>
  );
}

export default Fixtures;

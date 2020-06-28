import React from "react";
// import classes from "./TestGrids.module.scss";
import classes from "../../../CssFramework/grids.module.scss";

function TestGrids() {
  return (
    <div className={`${classes.container} ${classes.px_10}`}>
      <div className={`${classes.row} ${classes.mx_10} ${classes.px_10}`}>
        <div
          className={`${classes.col_4} ${classes.content_grid_4}  ${classes.mx_10} ${classes.px_10}`}
        >
          <h1>grid 2</h1>
          <p>
            hello there hello there hello there hello therehello there hello
            there hello there hello therehello there hello there hello there
            hello therehello there hello there hello there hello therehello
            there hello there hello there hello there
          </p>
          <h2>closing text</h2>
        </div>
        <div className={`${classes.col_3} ${classes.mx_10}`}>
          <h1>grid 3</h1>
          <p>
            hello there hello there hello there hello therehello there hello
            there hello there hello therehello there hello there hello there
            hello therehello there hello there hello there hello therehello
            there hello there hello there hello there
          </p>
        </div>
        <div
          className={`${classes.col_6} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 3</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
      </div>
      <div>test</div>
    </div>
  );
}

export default TestGrids;

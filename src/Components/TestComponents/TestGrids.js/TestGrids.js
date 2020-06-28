import React from "react";
import classes from "./TestGrids.module.scss";

function TestGrids() {
  return (
    <div className={`${classes.container} ${classes.px_10}`}>
      <div className={`${classes.row} ${classes.mx_10} ${classes.px_10}`}>
        {/* <div
        className={`${classes.row_auto_adjust} ${classes.mx_10} ${classes.px_10}`}
      > */}
        <div
          className={`${classes.col_4} ${classes.content_grid_4}  ${classes.mx_10} ${classes.px_10}`}
        >
          <h1>grid 4</h1>
          <p>
            hello there hello there hello there hello therehello there hello
            there hello there hello therehello there hello there hello there
            hello therehello there hello there hello there hello therehello
            there hello there hello there hello there
          </p>
          <h2>closing text</h2>
        </div>
        <div
          className={`${classes.col_2} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 2</h1>
          <p>
            hello there hello there hello there hello ththere hello ththere
            hello ththere hello ththere hello ththere hello the
          </p>
        </div>
        <div
          className={`${classes.col_6} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 6</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
        <div
          className={`${classes.col_2} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 2</h1>
          <p>
            hello there hello there hello there hello there hello ththere hello
            ththere hello ththere hello ththere hello ththe
          </p>
        </div>
        <div
          className={`${classes.col_2} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 2</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
        <div
          className={`${classes.col_8} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 8</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
        <div
          className={`${classes.col_8} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 8</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
        <div
          className={`${classes.col_8} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 8</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
        <div
          className={`${classes.col_3} ${classes.border_thin} ${classes.center_align} ${classes.mx_10}`}
        >
          <h1>grid 3</h1>
          <p>hello there hello there hello there hello the</p>
        </div>
      </div>
    </div>
  );
}

export default TestGrids;

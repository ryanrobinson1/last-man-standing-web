import React from "react";
import classes from "./TestButtons.module.scss";

function TestButtons() {
  return (
    <div>
      <div>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_primary}`}>
          Primary
        </a>
        <a
          href="/leagues"
          className={`${classes.btn} ${classes.btn_secondary}`}
        >
          Secondary
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_success}`}>
          Success
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_danger}`}>
          Danger
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_warning}`}>
          Warning
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_info}`}>
          Info
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_light}`}>
          Light
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.btn_dark}`}>
          Dark
        </a>
      </div>
    </div>
  );
}

export default TestButtons;

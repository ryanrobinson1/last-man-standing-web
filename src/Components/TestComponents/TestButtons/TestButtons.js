import React from "react";
import classes from "./TestButtons.module.scss";

function TestButtons() {
  return (
    <div>
      <div>
        <a href="/leagues" className={`${classes.btn} ${classes.primary}`}>
          Primary
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.secondary}`}>
          Secondary
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.success}`}>
          Success
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.danger}`}>
          Danger
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.warning}`}>
          Warning
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.info}`}>
          Info
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.light}`}>
          Light
        </a>
        <a href="/leagues" className={`${classes.btn} ${classes.dark}`}>
          Dark
        </a>
      </div>
    </div>
  );
}

export default TestButtons;

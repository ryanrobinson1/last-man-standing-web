import React, { Fragment, useState } from "react";
import classes from "./FormGroup.module.scss";

function FormGroup(props) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Fragment>
      <div className={`${classes.col_flex}`}>
        <label
          className={`${classes.formGroup_label} ${classes.border_control_left_10px}`}
        >
          {props.labelName}
        </label>
        <input
          className={`${classes.formGroup_input} ${classes.border_control_right_10px}`}
          name={props.inputName}
          type={props.inputType}
          onChange={onChange}
          value={value}
        ></input>
      </div>
    </Fragment>
  );
}

export default FormGroup;

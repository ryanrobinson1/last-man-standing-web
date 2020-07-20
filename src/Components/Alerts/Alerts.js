import React from "react";
import classes from "./Alerts.module.scss";
import { connect } from "react-redux";

const Alerts = (props) => {
  const { alerts } = props;

  return (
    alerts.length > 0 &&
    alerts !== null &&
    alerts.map((alert) => (
      <div className={`${classes.btn} ${classes.btn_warning}`}>
        <div>{alert.msg}</div>
      </div>
    ))
  );

  //   const showAlerts = () => {
  //     if (alerts.length > 0 && alerts !== null) {
  //       alerts.map((alert) => {
  //         return (
  //           <div className={`${classes.btn} ${classes.btn_warning}`}>
  //             <div>{alert.msg}</div>
  //           </div>
  //         );
  //       });
  //     }
  //   };

  //   return (
  //     alerts.length > 0 &&
  //     alerts !== null &&
  //     alerts.map((alert) => {
  //       return (
  //         <div className={`${classes.btn} ${classes.btn_warning}`}>
  //           <div>{alert.msg}</div>
  //         </div>
  //       );
  //     })
  //   );
};

const mapStateToProps = (state) => {
  return { alerts: state.alert };
};

export default connect(mapStateToProps)(Alerts);

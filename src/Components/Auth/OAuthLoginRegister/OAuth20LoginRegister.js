import React from 'react';
import classes from './OAuth20LoginRegister.module.scss';
import { Link } from 'react-router-dom';
import menu from '../../../logo.svg';
import image from '../../../res/Milk.png';

import routes from '../../../utilities/utils';
import Cards from '../../Cards/Cards';
import LoginForm from '../../Forms/LoginForm/LoginForm';
import RegisterForm from '../../Forms/RegisterForm/RegisterForm';

import { connect } from 'react-redux';
import { setAlert } from '../../../Actions/setAlert';
// import { auth } from '../../../Actions/auth';
// import { register } from '../../../Actions/auth';
import OAuth20Form from '../../Forms/OAuth20/OAuth20';

let loginState = '';

function OAuth20LoginRegister(props) {
  const { setAlert, isLoginRegister, auth, register } = props;

  let loginOrRegisterText = '';

  //   const loginOrRegister = () => {
  //     if (isLoginRegister === 'login') {
  //       loginOrRegisterText = 'login';
  //       // return <LoginForm />;
  //       return;
  //     } else {
  //       loginOrRegisterText = 'register';
  //       return <RegisterForm />;
  //     }
  //   };

  const sendAlertSuccess = () => {
    setAlert('cunt success');
    auth('auth is successful');
  };

  const sendAlertFailure = () => {
    setAlert('you failed cunt');
    auth('auth is UNsuccessful');
  };

  const registerUser = () => {
    register();
  };
  const showLoggedInDashboard = () => {
    // console.log("this is the state of alert: ", alert);
  };

  return (
    <div id={loginOrRegisterText}>
      <div className={`${classes.container_max_width_100} ${classes.bg_light_grey}`}>
        <div className={`${classes.container_max_width_1280px}`}>
          <div className={`${classes.row} ${classes.login_margin_all_50px}`}>
            <div className={`${classes.col_2}`}></div>
            <div className={`${classes.col_8}`}>
              <div className={`${classes.container_col_8}`}>
                <div className={`${classes.row_columns_2} `}>
                  <div className={`${classes.col_1}  ${classes.bg_dark} ${classes.login_border_control_left_25px} ${classes.login_padding_all_50px} ${classes.remove_mobileEEE}`}>
                    <div>
                      <img className={`${classes.login_img_full}`} src={image} />
                    </div>
                  </div>
                  <div className={`${classes.col_1}  ${classes.bg_primary} ${classes.login_border_control_right_25px} ${classes.login_padding_all_50px}`}>
                    <OAuth20Form />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${classes.col_2}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { alert: state.alert };
};

export default connect(mapStateToProps, {
  setAlert: setAlert,
})(OAuth20LoginRegister);

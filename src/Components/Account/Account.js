import React, { Fragment, useState } from 'react';
import classes from './Account.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isAuthenticated } from '../../Actions/isAuthenticated';

const googleLink = 'http://localhost:5000/api/auth/google';

function Account(props) {
  const { isAuthenticated } = props;
  // isAuthenticated();
  //make a DB call to the server
  //attached JWT to request
  //return our profile data

  return (
    <Fragment>
      <form className={`${classes.row_columns_1} ${classes.row_grid_gap_20px} `}>
        <h1 className={`${classes.center_align}`}>Account Test page</h1>
        <div>
          <a className={`${classes.btn} ${classes.btn_primary}`} href="#">
            {' '}
            Google{' '}
          </a>
        </div>
      </form>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.isAuth,
});

export default connect(mapStateToProps, { isAuthenticated })(Account);

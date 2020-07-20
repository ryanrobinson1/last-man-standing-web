import React, { Fragment, useState } from 'react';
import classes from './OAuth20.module.scss';
import { Link } from 'react-router-dom';

import routes from '../../../utilities/utils';
import FormGroup from '../FormGroup';

const googleLink = 'http://localhost:5000/api/auth/google';

function OAuth20Form() {
  return (
    <Fragment>
      <form className={`${classes.row_columns_1} ${classes.row_grid_gap_20px} `}>
        <h1 className={`${classes.center_align}`}>Social Sign In</h1>
        <div>
          <a className={`${classes.btn} ${classes.btn_primary}`} href={googleLink}>
            {' '}
            Google{' '}
          </a>
        </div>
      </form>
    </Fragment>
  );
}

export default OAuth20Form;

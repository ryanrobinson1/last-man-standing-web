import React from 'react';
import classes from './DataCenter.module.scss';
import { Link } from 'react-router-dom';
import menu from '../../logo.svg';

import routes from '../../utilities/utils';

function DataCenter() {
  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col_12}`}>
          <h1>data center</h1>
        </div>
      </div>
    </div>
  );
}

export default DataCenter;

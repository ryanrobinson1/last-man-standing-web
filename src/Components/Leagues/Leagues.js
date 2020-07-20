import React from 'react';
import classes from './Leagues.module.scss';
import { Link } from 'react-router-dom';
import menu from '../../logo.svg';

import routes from '../../utilities/utils';

function Leagues() {
  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row}`}>
        <div className={`${classes.col_12}`}>
          <h1>Leagues</h1>
        </div>
      </div>
    </div>
  );
}

export default Leagues;

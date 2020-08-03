//MAIN IMPORTS
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';

//CSS IMPORT
import classes from './LeagueTableCard.module.scss';

//UTILS IMPORT
import { endpoints, routes } from '../../utilities/utils';

function LeagueTableCards(props) {
  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row_col_1} ${classes.center_align}}`}>
        <div className={`${classes.flex_container}`}>
          <div className={`${classes.flex_item_rank}`}>
            <h3>{props.rank}</h3>
          </div>
          <div className={`${classes.flex_item_badge}`}>
            <img className={`${classes.flex_item_badge_img}`} src={props.badge}></img>
          </div>
          <div className={`${classes.flex_item_text}`}>
            <h3>{props.teamName}</h3>
          </div>
          <div className={`${classes.flex_item_number}`}>
            <h3>{props.gamesPlayed}</h3>
          </div>
          <div className={`${classes.flex_item_number}`}>
            <h3>{props.wins}</h3>
          </div>
          <div className={`${classes.flex_item_number}`}>
            <h3>{props.loses}</h3>
          </div>
          <div className={`${classes.flex_item_number}`}>
            <h3>{props.draws}</h3>
          </div>

          <div className={`${classes.flex_item_number} ${classes.hide_mobile}`}>
            <h3>{props.goalsFor}</h3>
          </div>
          <div className={`${classes.flex_item_number} ${classes.hide_mobile}`}>
            <h3>{props.goalsAgainst}</h3>
          </div>
          <div className={`${classes.flex_item_number} ${classes.hide_mobile_xs}`}>
            <h3>{props.goalDifference}</h3>
          </div>

          <div className={`${classes.flex_item_number}`}>
            <h3>{props.points}</h3>
          </div>

          <div className={`${classes.flex_item_form} ${classes.hide_mobile}`}>
            <h3>{props.form}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { reduxStoreStateYouWantVariableName: state.reduxStoreStateYouWant };
};

export default LeagueTableCards;

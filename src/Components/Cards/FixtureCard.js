import React from 'react';
import classes from './FixtureCard.module.scss';
import { Link } from 'react-router-dom';

import menu from '../../logo.svg';
import routes from '../../utilities/utils';

import arsenalBadge from '../../res/footballIcons/PremierLeauge_19:20/Arsenal.png';
import astonVillaBadge from '../../res/footballIcons/PremierLeauge_19:20/Aston-Villa.png';

function FixtureCard(props) {
  const dateRow = () => {
    return (
      <div className={`${classes.fixture_card_row}`}>
        <div className={`${classes.col_1}`}></div>
        <div className={`${classes.col_10}`}>
          <h3 className={`${classes.fixture_date}`}>{props.fixtureDate}</h3>
        </div>
        <div className={`${classes.col_1}`}></div>
      </div>
    );
  };

  const teamNamesRow = () => {
    return (
      <div className={`${classes.fixture_card_row} ${classes.fixture_margin_all_10px}`}>
        <div className={`${classes.col_1}`}></div>
        <div className={`${classes.col_4}`}>
          <h1 className={`${classes.fixture_center_align}`}>{props.homeTeam}</h1>
        </div>
        <div className={`${classes.col_2}`}>
          <div>
            <h3 className={`${classes.fixture_venue}`}>{props.venue}</h3>
          </div>
        </div>
        <div className={`${classes.col_4}`}>
          <h1 className={`${classes.fixture_center_align}`}>{props.awayTeam}</h1>
        </div>
        <div className={`${classes.col_1}`}></div>
      </div>
    );
  };

  const teamBadgeRow = () => {
    return (
      <div className={`${classes.fixture_card_row}`}>
        <div className={`${classes.col_1}`}></div>
        <div className={`${classes.col_4}`}>
          <div className={`${classes.fixture_badgeImg}`}>
            <img src={props.homeTeamBadge}></img>
          </div>
        </div>
        <div className={`${classes.col_2}`}>
          <h3 className={`${classes.fixture_time}`}>{props.fixtureKickOffTime}</h3>
        </div>
        <div className={`${classes.col_4}`}>
          <div className={`${classes.fixture_badgeImg}`}>
            <img src={props.awayTeamBadge}></img>
          </div>
        </div>
        <div className={`${classes.col_1}`}></div>
      </div>
    );
  };
  const formAndResultsRow = () => {
    return (
      <div className={`${classes.fixture_card_row}`}>
        <div className={`${classes.col_1}`}></div>
        <div className={`${classes.col_4}`}>
          <h1 className={`${classes.fixture_center_align}`}>home team form bar</h1>
        </div>

        <div className={`${classes.col_1} ${classes.border_thin_radius_6px} ${classes.bg_white} ${classes.fixture_margin_all_5px}`}>
          <h4 className={`${classes.fixture_score}`}>{props.homeScore}</h4>
        </div>
        <div className={`${classes.col_1} ${classes.border_thin_radius_6px} ${classes.bg_white} ${classes.fixture_margin_all_5px}`}>
          <h4 className={`${classes.fixture_score}`}>{props.awayScore}</h4>
        </div>
        <div className={`${classes.col_4}`}>
          <h1 className={`${classes.fixture_center_align}`}>away team form bar</h1>
        </div>
        <div className={`${classes.col_1}`}></div>
      </div>
    );
  };

  const cardLayout = () => {
    return (
      <div className={`${classes.fixture_card_container}`}>
        {dateRow()}
        {teamNamesRow()}
        {teamBadgeRow()}
        {formAndResultsRow()}
      </div>
    );
  };

  return (
    <div className={`${classes.container_max_width_100} ${classes.bg_off_white} `}>
      <div className={`${classes.container_max_width_1280px}`}>
        <div className={`${classes.row_columns_12} ${classes.fixture_margin_all_10px} ${classes.border_thin_radius_6px} ${classes.box_shadow_1px}`}>
          <div className={`${classes.col_1}`}> gutter </div>
          <div className={`${classes.col_10} ${classes.fixture_padding}`}>
            <div>{cardLayout()}</div>
          </div>
          <div className={`${classes.col_1}`}> gutter</div>
        </div>
      </div>
    </div>
  );
}

export const formatTime = (fixture) => {
  const hours = new Date(fixture.event_date).getHours();
  const mins = new Date(fixture.event_date).getMinutes();
  const formattedMinutes = mins === 0 ? `${mins}0` : mins;
  return `${hours} : ${formattedMinutes}`;
};

export const formatScoreLines = (fixture) => {
  if (fixture.score.extratime) {
    console.log('this game has extra time, how do we handle this?');
  }
  if (fixture.score.penalty) {
    console.log('this game has extra time, AND / OR penalties, how do we handle this?');
  }

  const homeScore = fixture.score.fulltime.split('-')[0];
  const awayScore = fixture.score.fulltime.split('-')[1];
  return {
    homeScore,
    awayScore,
  };
};

export default FixtureCard;

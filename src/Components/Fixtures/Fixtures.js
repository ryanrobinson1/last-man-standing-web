import React, { useState, useEffect } from 'react';
import classes from './Fixtures.module.scss';
// import { Link } from 'react-router-dom';

import FixtureCard, { formatTime, formatScoreLines } from '../Cards/FixtureCard';
import { endpoints } from '../../utilities/utils';

function Fixtures(props) {
  let [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // const gameWeekParameter = props.match.params.gameWeek;
    const apiCall = async () => {
      try {
        const requestOptions = {
          method: 'get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
        let response = await fetch(`${endpoints.premierLeagueFixturesCurrent}`, requestOptions);
        let data = await response.json();
        setFixtures(data);
      } catch (error) {
        console.log('fixtures API call failed');
      }
    };

    apiCall();
  }, []); //when page url changes we need to update.. so have to watch for the param name ?? or uRL?

  const createFixturesForGameWeek = () => {
    return fixtures.map((fixture) => {
      const kickOffTime = formatTime(fixture);
      const score = formatScoreLines(fixture);

      return (
        <li key={fixture.fixture_id}>
          <FixtureCard
            fixtureDate={new Date(fixture.event_date).toDateString()}
            venue={fixture.venue}
            fixtureKickOffTime={kickOffTime}
            homeTeam={fixture.homeTeam.team_name}
            homeTeamBadge={fixture.homeTeam.logo}
            homeScore={score.homeScore}
            awayTeam={fixture.awayTeam.team_name}
            awayTeamBadge={fixture.awayTeam.logo}
            awayScore={score.awayScore}
          ></FixtureCard>
        </li>
      );
    });
  };

  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row} ${classes.center_align}}`}>
        <div className={`${classes.col_12}`}>
          <ul>{createFixturesForGameWeek()}</ul>
        </div>
      </div>
    </div>
  );
}

export default Fixtures;

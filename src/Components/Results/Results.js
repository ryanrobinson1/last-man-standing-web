import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Results.module.scss';

import { endpoints, routes } from '../../utilities/utils';
import FixtureCard from '../Cards/FixtureCard';
import { formatTime, formatScoreLines } from '../Cards/FixtureCard';
import Loading from '../Loading/Loading';

function Results(props) {
  let [fixtures, setFixtures] = useState([]);
  let [current, setCurrent] = useState(props.currentGameWeek.gameWeek);
  let [prev, setPrev] = useState(props.currentGameWeek.gameWeek);
  let [next, setNext] = useState(props.currentGameWeek.gameWeek);
  let [path, setPath] = useState(0);
  let [loading, setLoading] = useState(true);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    setPath(params.gameWeek);
    setCurrent(props.currentGameWeek.gameWeek);
    setNext(parseInt(params.gameWeek) + 1);
    setPrev(parseInt(params.gameWeek) - 1);
    setLoading(true);
  }, [props.currentGameWeek.gameWeek]);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const requestOptions = {
          method: 'get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
        let response = await fetch(`${endpoints.premierLeagueResultsFixturesActiveSeason}/${path}`, requestOptions);
        let data = await response.json();
        setFixtures(data);
        setLoading(false);
      } catch (error) {
        console.log('fixtures API call failed');
      }
    };

    // setTimeout(() => {
    //   apiCall();
    // }, 5000);

    apiCall();
  }, [path]); //when page url changes we need to update.. so have to watch for the param name ?? or uRL?

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

  const LoadNextGameWeek = () => {
    const nextGameWeek = parseInt(params.gameWeek) + 1;
    setPath(nextGameWeek);
    setNext(nextGameWeek + 1);
    setPrev(nextGameWeek - 1);
    history.push(`${routes.resultsBaseURL}/${nextGameWeek}.html`);
  };

  const LoadPrevGameWeek = () => {
    const previousGameWeek = parseInt(params.gameWeek) - 1;
    setPath(previousGameWeek);
    setPrev(previousGameWeek - 1);
    setNext(previousGameWeek + 1);
    history.push(`${routes.resultsBaseURL}/${previousGameWeek}.html`);
  };

  const LoadCurrentActiveGameWeek = () => {
    const currentActiveGameWeek = parseInt(props.currentGameWeek.gameWeek);
    setPath(currentActiveGameWeek);
    setCurrent(currentActiveGameWeek);
    setPrev(currentActiveGameWeek - 1);
    setNext(currentActiveGameWeek + 1);
    history.push(`${routes.resultsBaseURL}/${currentActiveGameWeek}.html`);
  };

  const navigation = () => {
    return (
      <>
        {/* {checkIfPrevGameWeekIsAvailable()} */}
        <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>{<Link onClick={LoadPrevGameWeek}> Prev GW {prev}</Link>}</div>
        <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>{<Link onClick={LoadCurrentActiveGameWeek}> Current Active GW {current}</Link>}</div>
        {/* {checkIfNextGameWeekIsAvailable()} */}
        <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>{<Link onClick={LoadNextGameWeek}> Next GW {next}</Link>}</div>
      </>
    );
  };

  const isLoading = () => {
    if (loading === true) {
      return (
        <>
          <div className={`${classes.row} ${classes.center_align}}`}>
            <div className={`${classes.col_12}`}>
              <Loading type="spinningBubbles" color="grey" height="50vh" width="100px" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={`${classes.row} ${classes.center_align}}`}>
            <div className={`${classes.results_flex_container} ${classes.navigation_border} ${classes.navigation_border_box_shadow}`}>{navigation()}</div>
          </div>
          <div className={`${classes.row} ${classes.center_align}}`}>
            <div className={`${classes.col_12}`}>
              <ul>{createFixturesForGameWeek()}</ul>
              {/* {loading === true ? <Loading type="spinningBubbles" color="grey" height="50vh" width="100px" /> : <ul>{createFixturesForGameWeek()}</ul>} */}
            </div>
          </div>
        </>
      );
    }
  };

  return <div className={`${classes.container_max_width_1280px}`}>{isLoading()}</div>;
}

const mapStateToProps = (state) => {
  return { currentGameWeek: state.currentGameWeek };
};

export default connect(mapStateToProps)(Results);
// const checkIfPrevGameWeekIsAvailable = () => {
//   if (current > 1) {
//     return (
//       <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>
//         <Link onClick={LoadPrevGameWeek}> Prev GW {prev}</Link>
//       </div>
//     );
//   }
// };

// const checkIfNextGameWeekIsAvailable = () => {
//   if (current <= 37) {
//     return (
//       <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>
//         <Link onClick={LoadNextGameWeek}> Next GW {next}</Link>
//       </div>
//     );
//   }
//   // else {
//   //   return <div className={`${classes.col_1} ${classes.btn} ${classes.game_week_not_available}`}>Next Next Next</div>;
//   // }
// };

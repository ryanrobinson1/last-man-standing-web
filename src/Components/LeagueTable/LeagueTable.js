//MAIN IMPORTS
import React, { useState, useEffect } from 'react';
// import Media from 'react-media';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//CSS IMPORT
import classes from './LeagueTable.module.scss';

//UTILS IMPORT
import { endpoints, routes } from '../../utilities/utils';
import LeagueTableCard from '../Cards/LeagueTableCard';
import Loading from '../Loading/Loading';
import teamsJson from '../../utilities/teams_1920.json';

function LeagueTable(props) {
  let [isMobile, setIsMobile] = useState(false);
  const maxWidth = '980px';

  useEffect(() => {
    var width = window.matchMedia(`(max-width: ${maxWidth})`);
    width.matches ? setIsMobile(true) : setIsMobile(false);
  }, []);

  const convertToMobileName = (teamName) => {
    if (isMobile) {
      for (let index = 0; index < teamsJson.teams.length; index++) {
        if (teamName === teamsJson.teams[index].name) {
          return teamsJson.teams[index].mobileName;
        }
      }
    } else {
      return teamName;
    }
  };

  const createLeagueTable = () => {
    return props.leagueTable.rankings.map((tableRow) => {
      return (
        <li key={tableRow.rank} className={`${classes.border_bottom}`}>
          <LeagueTableCard
            rank={tableRow.rank}
            badge={tableRow.logo}
            teamName={convertToMobileName(tableRow.teamName)}
            gamesPlayed={tableRow.all.matchsPlayed}
            wins={tableRow.all.win}
            loses={tableRow.all.lose}
            draws={tableRow.all.draw}
            goalsFor={tableRow.all.goalsFor}
            goalsAgainst={tableRow.all.goalsAgainst}
            goalDifference={tableRow.goalsDiff}
            points={tableRow.points}
            form={tableRow.forme}
          ></LeagueTableCard>
        </li>
      );
    });
  };

  return (
    <div className={`${classes.container_max_width_1280px}`}>
      <div className={`${classes.row} ${classes.center_align}}`}>
        <div className={`${classes.col_12}`}>
          {props.leagueTable.isLoading ? <Loading></Loading> : <ul>{createLeagueTable()}</ul>}
          <MediaQuery
            maxDeviceWidth={maxWidth}
            onChange={(matches) => {
              setIsMobile(matches);
            }}
          >
            {(matches) => (matches ? <></> : <></>)}
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { leagueTable: state.leagueTable };
};

export default connect(mapStateToProps)(LeagueTable);

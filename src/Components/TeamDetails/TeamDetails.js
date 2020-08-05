//MAIN IMPORTS
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//CSS IMPORT
import classes from './TeamDetails.module.scss';

//UTILS IMPORT
import { endpoints, routes } from '../../utilities/utils';

function TeamDetails(props) {
  let [teamData, setTeamData] = useState({});
  let [variableThatWillTriggerNewAPICall, setVariableThatWillTriggerNewAPICall] = useState('');
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    //anything we want to set on first load.. data calls etc
  }, []);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const requestOptions = {
          method: 'get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
        let response = await fetch(`${endpoints.premierLeagueTeam}/Arsenal.html`, requestOptions);
        let data = await response.json();
        setTeamData(data);
      } catch (error) {
        console.log('fixtures API call failed');
      }
    };

    apiCall();
  }, []);

  const injuries = () => {
    return (
      <div className={`${classes.container_max_width_1280px}`}>
        <h2>Injuries</h2>
        <div className={`${classes.row} ${classes.border}`}>
          <div className={`${classes.col_2}`}>
            <img src={teamData.logo}></img>
          </div>
          <div className={`${classes.col_10}`}>
            <h2>{teamData.name}</h2>
            <h3>{teamData.venue_name}</h3>
            <h3>{teamData.venue_address}</h3>
            <h3>{teamData.venue_city}</h3>
            <h3>Capacity: {teamData.venue_capacity}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={`${classes.container_max_width_1280px}`}>
        <h2>Club Info</h2>
        <div className={`${classes.row} ${classes.border}`}>
          <div className={`${classes.col_2}`}>
            <img src={teamData.logo}></img>
          </div>
          <div className={`${classes.col_10}`}>
            <h2>{teamData.name}</h2>
            <h3>{teamData.venue_name}</h3>
            <h3>{teamData.venue_address}</h3>
            <h3>{teamData.venue_city}</h3>
            <h3>Capacity: {teamData.venue_capacity}</h3>
          </div>
        </div>

        {/* <div className={`${classes.row} ${classes.border}`}>{injuries()}</div> */}
      </div>
      <div className={`${classes.margin_injuries}`}>{injuries()}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { reduxStoreStateYouWantVariableName: state.reduxStoreStateYouWant };
};

export default connect(mapStateToProps)(TeamDetails);

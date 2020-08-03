//MAIN IMPORTS
import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//CSS IMPORT
import classes from './Loading.module.scss';

//UTILS IMPORT
import { endpoints, routes } from '../../utilities/utils';
import ReactLoading from 'react-loading';

function Loading(props) {
  let [state, setState] = useState('');
  let [variableThatWillTriggerNewAPICall, setVariableThatWillTriggerNewAPICall] = useState('');
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    //anything we want to set on first load.. data calls etc
  }, []);

  useEffect(() => {
    //API is called, each time we click a button
    const apiCall = async () => {
      try {
        const requestOptions = {
          method: 'get',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        };
        let response = await fetch(`${endpoints.premierLeagueResultsFixturesActiveSeason}/stuff.html`, requestOptions);
        let data = await response.json();
      } catch (error) {
        console.log('fixtures API call failed');
      }
    };

    apiCall();
  }, [variableThatWillTriggerNewAPICall]); //when page url changes we need to update.. so have to watch for the param name ?? or uRL?

  const stuff = () => {
    return (
      <>
        <div className={`${classes.col_1} ${classes.btn} ${classes.btn_primary}`}>stuff</div>
      </>
    );
  };

  return (
    // <div className={`${classes.container_max_width_1280px}`}>
    //   <div className={`${classes.row} ${classes.center_align}}`}>
    //     <div className={`${classes.col_12}`}>
    //       LOADING component
    //       <ReactLoading type={props.type} color={props.color} height={'20%'} width={'20%'} />
    //     </div>
    //   </div>
    // </div>

    <div className={`${classes.container_max_width_1280px} ${classes.margin_y_50px}`}>
      <div className={`${classes.row} `}>
        <div className={`${classes.col_12} ${classes.fixture_padding}`}>
          <div className={`${classes.loading_flex_container} ${classes.loading_border} ${classes.loading_border_box_shadow}`}>
            <div className={`${classes.loading_flex_item}`}>
              {/* <ReactLoading type={props.type} color={props.color} height={props.height} width={props.width} /> */}
              <ReactLoading type="spinningBubbles" color="grey" height="50vh" width="100px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { reduxStoreStateYouWantVariableName: state.reduxStoreStateYouWant };
};

export default connect(mapStateToProps)(Loading);

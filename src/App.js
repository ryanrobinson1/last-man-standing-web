import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { routes, endpoints } from './utilities/utils';

//redux
import store from './Store/store';
import { Provider } from 'react-redux';

//alerts
import Alerts from './Components/Alerts/Alerts';

//actions
import { isAuthenticated } from './Actions/isAuthenticated';
import { currentGameWeekAction } from './Actions/currentGameWeekAction';
import { leagueTableAction } from './Actions/leagueTableAction';

//header and footer
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Navigation/Footer/Footer';

//pages
import Homepage from './Components/Main/Homepage/Homepage';
import OAuth20LoginRegister from './Components/Auth/OAuthLoginRegister/OAuth20LoginRegister';
import Account from './Components/Account/Account';
// import LoginRegister from './Components/Auth/Login/LoginRegister';
// import Register from './Components/Auth/Register/Register';
import Leagues from './Components/Leagues/Leagues';
import Injuries from './Components/Injuries/Injuries';
import Fixtures from './Components/Fixtures/Fixtures';
import Results from './Components/Results/Results';
import LeagueTable from './Components/LeagueTable/LeagueTable';
import DataCenter from './Components/DataCenter/DataCenter';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App(props) {
  useEffect(() => {
    // console.log('check auth state here');
    // store.dispatch(isAuthenticated());
    // console.log('dispatched the isAuth action');

    store.dispatch(currentGameWeekAction());
    // store.dispatch(leagueTableAction());
    setTimeout(() => {
      store.dispatch(leagueTableAction());
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Alerts />

        <Switch>
          <ProtectedRoute path={routes.account} exact component={Account} />
          <Route path={routes.root} exact component={Homepage} />
          <Route path={routes.login} exact component={OAuth20LoginRegister} />
          <Route path={routes.leagues} exact component={Leagues} />
          <Route path={routes.injuries} exact component={Injuries} />
          <Route path={routes.currentFixtures} exact component={Fixtures} />
          <Route path={routes.results} exact component={Results} />
          <Route path={routes.leagueTable} exact component={LeagueTable} />
          <Route path={routes.dataCenter} exact component={DataCenter} />

          <Route path={routes.about} exact component={About} />
          <Route path={routes.contactUs} exact component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

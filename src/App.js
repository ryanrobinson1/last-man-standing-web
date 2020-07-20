import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { routes } from './utilities/utils';

//redux
import store from './Store/store';
import { Provider } from 'react-redux';

//alerts
import Alerts from './Components/Alerts/Alerts';

//header and footer
import Navbar from './Components/Navigation/Navbar';
import Footer from './Components/Navigation/Footer/Footer';

//pages
import Homepage from './Components/Main/Homepage/Homepage';
import OAuth20LoginRegister from './Components/Auth/OAuthLoginRegister/OAuth20LoginRegister';
import Account from './Components/Account/Account';
import LoginRegister from './Components/Auth/Login/LoginRegister';
import Register from './Components/Auth/Register/Register';
import Leagues from './Components/Leagues/Leagues';
import Fixtures from './Components/Fixtures/Fixtures';
import DataCenter from './Components/DataCenter/DataCenter';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Alerts />

        <Switch>
          <ProtectedRoute path={routes.account} exact component={Account} />
          <Route path={routes.root} exact component={Homepage} />
          <Route path={routes.login} exact component={OAuth20LoginRegister} />
          {/* <Route path={routes.account} exact component={Account} /> */}
          {/* <Route path={routes.register} exact>
            <LoginRegister isLoginRegister="register"></LoginRegister>
          </Route>
          <Route path={routes.login} exact>
            <LoginRegister isLoginRegister="login"></LoginRegister>
          </Route> */}
          {/* <Route path={routes.register} exact component={Register} /> */}
          <Route path={routes.leagues} exact component={Leagues} />
          <Route path={routes.fixtures} exact component={Fixtures} />
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

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import endpoints from "./utilities/utils";

//header and footer
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Navigation/Footer/Footer";

//pages
import Homepage from "./Components/Main/Homepage/Homepage";
import LoginRegister from "./Components/Auth/Login/LoginRegister";
import Register from "./Components/Auth/Register/Register";
import Leagues from "./Components/Leagues/Leagues";
import Fixtures from "./Components/Fixtures/Fixtures";
import DataCenter from "./Components/DataCenter/DataCenter";

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path={endpoints.root} exact component={Homepage} />
        {/* <Route path={endpoints.login} exact component={LoginRegister} /> */}
        <Route path={endpoints.register} exact>
          <LoginRegister isLoginRegister="register"></LoginRegister>
        </Route>
        <Route path={endpoints.login} exact>
          <LoginRegister isLoginRegister="login"></LoginRegister>
        </Route>
        <Route path={endpoints.register} exact component={Register} />
        <Route path={endpoints.leagues} exact component={Leagues} />
        <Route path={endpoints.fixtures} exact component={Fixtures} />
        <Route path={endpoints.dataCenter} exact component={DataCenter} />

        <Route path={endpoints.about} exact component={About} />
        <Route path={endpoints.contactUs} exact component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

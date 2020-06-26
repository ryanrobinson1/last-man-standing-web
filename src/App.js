import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Homepage from "./Components/Main/Homepage/Homepage";

//nav
import Leagues from "./Components/Leagues/Leagues";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/leagues">
            <Leagues></Leagues>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

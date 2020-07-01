import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Homepage from "./Components/Main/Homepage/Homepage";
import TestButtons from "./Components/TestComponents/TestButtons/TestButtons";
//nav
import Leagues from "./Components/Leagues/Leagues";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import TestGrids from "./Components/TestComponents/TestGrids.js/TestGrids";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Homepage></Homepage>
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

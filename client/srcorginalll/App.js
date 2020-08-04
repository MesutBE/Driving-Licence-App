import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Landing from "./Landing";

import FreeTest from "./components/freeTest/FreeTest";
import Result from "./components/resultsPage/Results";
import OneResultPage from "./components/oneResultPage/OneResultPage";
import Tutorials from "./components/tutorials/Tutorials";
import DrivingTips from "./components/drivingTips/DrivingTips";
import Tests from "./components/tests/Tests"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Landing } />
          <Route exact path="/freetest" component={FreeTest} />
          <Route exact path="/results" component={Result} />
          <Route exact path="/oneResultPage" component={OneResultPage} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/drivingTips" component={DrivingTips} />
          <Route exact path="/tests" component={Tests} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

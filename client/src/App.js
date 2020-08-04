import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";

import FreeTest from "./components/freeTest/FreeTest";
import Result from "./components/resultsPage/Results";
import OneResultPage from "./components/oneResultPage/OneResultPage";
import Tutorials from "./components/tutorials/Tutorials";
import DrivingTips from "./components/drivingTips/DrivingTips";

import Admin from "./components/admin/Admin";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./components/home/Signup";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/freetest" component={FreeTest} />
          <Route exact path="/results" component={Result} />
          <Route exact path="/oneResultPage" component={OneResultPage} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route exact path="/drivingTips" component={DrivingTips} />
          <Route path="/admin" component={Admin}/>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout}/>
          <Route path="/signup" component={Signup}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;

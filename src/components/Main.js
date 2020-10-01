import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
// import { Button } from 'element-react';
// import 'element-theme-default';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Tabledata from "./Tabledata";

export class Main extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Sidebar />
          <div>
            <Switch>
              <Route path="/main/dashboard">
                <Dashboard />
              </Route>
              <Route path="/main/products">
                <Tabledata />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;

import React from "react";
import { BrowserRouter as Router, Route, Switch } 
from "react-router-dom";

import 'element-theme-default';

import Register from './components/Register';
import Home from './components/Home';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path= '/'> <Home/> </Route>
        <Route exact path= '/register'> <Register/> </Route>
        <Route  path= '/main'> <Main/> </Route>
      </Switch>
    </Router>
    );
  }
}

export default App;

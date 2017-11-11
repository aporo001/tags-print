import React, { Component } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

import Login from "./components/login";

class App extends Component {
  render() {
    let loggedIn = false;
    return (
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (loggedIn ? <div /> : <Redirect to="/login" />)}
          />
          <Route path="/login" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;

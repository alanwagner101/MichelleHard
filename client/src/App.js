import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/main"
import NoMatch from "./pages/NoMatch";

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Nav lock={this.lock} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;

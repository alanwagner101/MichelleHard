import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/main";
import About from "./pages/aboutUs";
import Schedule from "./pages/Schedule";
import NoMatch from "./pages/NoMatch";

class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Nav lock={this.lock} />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/schedule" component={Schedule} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;

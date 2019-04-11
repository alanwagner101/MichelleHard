import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/main";
import About from "./pages/aboutUs";
import Schedule from "./pages/Schedule";
import Login from "./pages/login";
import Admin from "./pages/admin";
import newUserInfo from "./pages/newUserInfo";
import NoMatch from "./pages/NoMatch";
import NewUserInfo from './pages/newUserInfo';

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
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/newuserinfo" component={NewUserInfo} />
            <Route component={NoMatch} />
          </Switch>
          <Footer lock={this.lock}/>
        </div>
      </Router>
    );
  }


}

export default App;

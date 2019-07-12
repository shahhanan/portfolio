import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../components/Header/Header";
import Home from "./home/Home";
import Profile from "./Profile/Profile";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="mainContainer">
          <div className="container-fluid">
            <Switch>
              <Route path="/Home" name="Home" component={Home} />
              <Route path="/Profile" name="Profile" component={Profile} />
              <Route path="/Skills" name="Skills" component={Skills} />
              <Route path="/Contact" name="Contact" component={Contact} />
              <Redirect from="/" to="/Home" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

/*const mapStateToProps = (state) => ({
    alerts: state.alerts
  });*/
export default AppRouter;

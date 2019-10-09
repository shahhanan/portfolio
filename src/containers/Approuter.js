import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { loadResponsiveAlerts } from "../actions/alertActions";
import Header from "../components/Header/Header";
import Home from "./home/Home";
import Profile from "./Profile/Profile";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";
import ResponsiveMessage from "../components/ResponsiveMessage/ResponsiveMessage";
import { connect } from "react-redux";
import { removeResponsiveAlerts } from "../actions/alertActions";
class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  removeMessage = () =>{
     this.props.dispatch(removeResponsiveAlerts());
    }
  componentDidMount = () => {
    /* setTimeout(
      function() {
        this.props.dispatch(loadResponsiveAlerts());
      }.bind(this),
      3000
    ); */
  };
  render() {
    return (
      <div className="App">
        <ResponsiveMessage message={this.props.message} removeMessage={() =>this.removeMessage()}/>
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
const mapStateToProps = ({ alerts }) => ({
  message: alerts.message
});
export default connect(mapStateToProps)(AppRouter);

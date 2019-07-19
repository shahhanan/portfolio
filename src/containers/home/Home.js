import React, { Component } from "react";
import InformationCard from "./InformationCard";
import ProfileImage from "./ProfileImage";
import SocialIcons from "./SocialIcons";
import { NavLink } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <div id="intro-container" className="flex-center">
          <div className="intro-card">
            <div className="card-container">
              <ProfileImage />
              <InformationCard />
              <SocialIcons />
            </div>
          </div>
          <div className="sideCard">
            <div className="mini-about">
              Hello, my name is Hanan Shabir. I'm a Web Designer, UI Developer
              and Mobile Application developer based in India. I also
              have major skills in creating Arcitecture for SPA (Single Page Applications),
              If you have a project or creative need that I can help
              with,<NavLink to={"/Contact"} className="nav-link" activeClassName="active">
              please get in touch. 
              </NavLink> 
              <br /><br /><br />
              I currently am working as a UI
              Developer at <a href="https://www.impelsys.com/">Impelsys,</a>{" "}
              <br />
              which is where my passion for development converge. See my
              previous work history on{" "}
              <a href="https://www.linkedin.com/in/hanan-shah-375a3a106/">
                LinkedIn.
              </a>{" "}
              <br />
              Currently I am accepting freelance work, I'd love to get coffee
              and get to know you, so don’t hesitate to get in touch.
              <div className="contactMeArea" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

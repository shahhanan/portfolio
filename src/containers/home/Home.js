import React, { Component } from "react";
import InformationCard from "./InformationCard";
import ProfileImage from "./ProfileImage";
import SocialIcons from "./SocialIcons";
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
              <ProfileImage   />
              <InformationCard  />
              <SocialIcons   />
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

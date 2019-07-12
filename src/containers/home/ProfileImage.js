import React, { Component } from "react";
import Image from "../../../public/assets/images/profile-image.jpg"
class ProfileImage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Profile-Image">
          <img src={Image}></img>
      </div>
    );
  }
}

export default ProfileImage;
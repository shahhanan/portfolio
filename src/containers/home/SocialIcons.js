import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class SocialIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="social-icons">
        <div className="icons-container">
          <span>
            <a href="https://www.linkedin.com/in/hanan-shah-375a3a106/"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>
          </span>
          <span>
          <a href="https://github.com/shahhanan"><FontAwesomeIcon icon={["fab", "github"]} /></a>
          </span>
          <span>
          <a href=""><FontAwesomeIcon icon={["fab", "facebook"]} /></a>
          </span>
          <span>
          <a href="mailto:shah.hanan51@gmail.com?subject=Hi There!"> <FontAwesomeIcon icon={["fab", "google"]} /></a>
          </span>
        </div>
      </div>
    );
  }
}

export default SocialIcons;

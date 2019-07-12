import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwosmeWrapper from "../../lib/wrappers/fontAwosmeWrapper";

class Header extends Component {
  render() {
    return (
      <header className="headerContainer">
        <div className="row">
          <div className="col headerWrapper  p-0">
            <div className="nameTitle">
              {" "}
              <Link
                to={"/"}
                className="Name"
              >
               <span>HS</span>  
              </Link>
            </div>
          </div>
          <div className="col headerWrapper p-0">
            <ul>
              <FontAwosmeWrapper name="home" text="Home" />
              <FontAwosmeWrapper name="user" text="Profile" />
              <FontAwosmeWrapper name="code" text="Skills" />
              <FontAwosmeWrapper name="envelope" text="Contact" />
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

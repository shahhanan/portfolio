import React, { Component } from "react";
import GraphicalFeebbackSystem from "../../plugins/genericGraphicalFeedbackSystem/index";
/* import MapComponent from "./Map/MapComponent"; */
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  postData = data => {
    console.log(data);
  };
  render() {
    const heading = "Contact Me";
    const ratings = ["Design", "Performance", "Responsive"];
    return (
      <div className="Contact">
        <div className="row">
          <div className="col float-left">
            {" "}
            <div className="feedback-container">
              {" "}
              <GraphicalFeebbackSystem
                heading={heading}
                Titles={ratings}
                getData={this.postData.bind(this)}
              />
            </div>{" "}
          </div>
          <div className="col float-right"> {/* <MapComponent  /> */} </div>
        </div>
      </div>
    );
  }
}

export default Contact;

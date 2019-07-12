import React, { Component } from "react"
import GerericFeedbackSystem from "../../plugins/genericGraphicalFeedbackSystem"

class Home extends Component {
  postData = (response) => {
    console.log(response)
  }
  render() {
    var heading = "Feedback Form";
    var titles = ["Design", "Responsiveness", "SomeThing"];
    return (
      <div className="mainContainer">
        {/* <GerericFeedbackSystem heading={heading} Titles={titles} getData={this.postData.bind(this)}/> */}
      </div>
    );
  }
}

export default Home;

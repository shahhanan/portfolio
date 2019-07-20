import React, { Component } from "react";
import GraphicalFeebbackSystem from "../../plugins/genericGraphicalFeedbackSystem/index";
import { GetFeedbackData } from "../../actions/ContactActions";
import { connect } from "react-redux";
import UserFeedback from "./UserFeedback"
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    this.props.dispatch(GetFeedbackData());
  };
  postData = data => {
    console.log(data);
  };
  render() {
    const heading = "Contact Me";
    const ratings = ["Design", "Performance", "Responsive"];
    return (
      <div className="Contact">
        <div className="row pt50">
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
          <div className="col float-right">
            {" "}
            <UserFeedback Data={this.props.feedbackData} /> 
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ Contact }) => ({
  feedbackData: Contact.feedback
});
export default connect(mapStateToProps)(Contact);

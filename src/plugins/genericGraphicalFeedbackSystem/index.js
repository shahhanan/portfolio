import React, { Component } from "react";
import Block from "./block";
import { map } from "lodash";
import { InputGroup, Button, Input } from "reactstrap";

class GerericFeedbackSystem extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      feedback: {}
    };
  }
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }
  handleEmailChange = (e) =>{
    this.setState({ email: e.target.value });
  }
  handleMessageChange = (e) =>{
    this.setState({ message: e.target.value });
  }
  callBack(title, points) {
    var obj = JSON.parse(JSON.stringify(this.state));
    obj.feedback[title] = points;
    this.setState(obj);
  }
  submitData = () => {
    this.props.getData(this.state);
  }
  
  render() {
    return (
      <div id="reactFeedbackComponent">
        <div className="container">
          <div className="row formHeading mb-1">{this.props.heading}</div>
          <div className="row mb-3">
            <span className="name">Name*</span>
            <InputGroup>
              <Input
                addon
                type="text"
                placeholder="First Name - Middle Name - Last Name"
                onChange={() => this.handleNameChange(event)}
              />
            </InputGroup>
          </div>
          <div className="row mb-3">
            {" "}
            <span className="email">Email*</span>
            <InputGroup>
              <Input
                addon
                type="email"
                placeholder="someone@example.com"
                onChange={() => this.handleEmailChange(event)}
              />
            </InputGroup>
          </div>
          <div className="row mb-3">
            <span className="message">Message - optional</span>
            <InputGroup>
              <Input
                addon
                type="textarea"
                placeholder="..."
                onChange={() => this.handleMessageChange(event)}
              />
            </InputGroup>
          </div>
          {map(this.props.Titles, (data, index) => {
            return (
              <Block
                key={index}
                title={data}
                percentage={this.callBack.bind(this)}
              />
            );
          })}
          <div className="row  mb-3 pb30">
            <Button className="submit" onClick={() => this.submitData()}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default GerericFeedbackSystem;

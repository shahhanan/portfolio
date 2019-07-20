import React, { Component } from "react";
import { map } from "lodash";
class UserFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    let Data = this.props.Data;
    return (
      <div id="UserFeedback">
        {map(Data, (data, index) => {
          return (
            <ul className="feedback" key={index}>
              <li>
              <span>{data.Name}</span>
              {map(data.Feedback, (value, key) => {
                return <span key={Math.random()}>{key + "   :-" + value}</span>;
              })}
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default UserFeedback;

/* forIn(Data, (value, key) => {
    console.log(key);
    console.log(value);
    return (
      <span>1</span>
    );
  }) */

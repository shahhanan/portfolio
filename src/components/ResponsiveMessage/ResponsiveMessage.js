import React, { Component } from "react";

class ResponsiveMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  componentWillReceiveProps = (nextprops) => {
    if(nextprops.message !== ""){
        setTimeout(
            function() {
              this.props.removeMessage();
            }.bind(this),
            3000
          );
    }  
  };
  render() {
    let message = this.props.message;
    return (
      <span>
        {message ? <div className="ResponsiveMessage">{message}</div> : ""}
      </span>
    );
  }
}


export default ResponsiveMessage;

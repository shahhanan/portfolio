import React, { Component } from "react";

class Block extends Component {
  constructor() {
    super();
    this.state = {
      newPercentage: 0,
      savedPercentage: 0,
      savedPercentageX: 0,
      savedPercentageY: 0,
    };
  }

  handleMouseLeave = e => {
    e.target.style.backgroundSize = this.state.savedPercentageX + "px" + " " + this.state.savedPercentageY + "px";
    this.setState({newPercentage: this.state.savedPercentage})
  };

  setPercentage = e => {
    var rect = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var elementWidth = rect.width;
    var percentage = Math.floor((x / elementWidth) * 100);
    var points = percentage / 10;
    this.setState({ savedPercentage: points, savedPercentageX: x, savedPercentageY: rect.height});
    this.props.percentage(points);
  };

  handleMouseMove = e => {
    var rect = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var elementWidth = rect.width;
    var percentage = Math.floor((x / elementWidth) * 100);
    var points = percentage / 10;
    e.target.style.backgroundSize = x + "px" + " " + rect.height + "px";
    this.setState({ newPercentage: points });
  };

  render() {
    return (
        <div className="row h40 mb10">
          <div className="col-md-2 lh40">{this.props.title}</div>
          <div className="col-md-6">
            <div
              id="outerDiv"
              onMouseLeave={e => this.handleMouseLeave(e)}
              onPointerMove={e => this.handleMouseMove(e)}
              onClick={e => this.setPercentage(e)}
            />
          </div>
          <div className="col-md-4">{this.state.newPercentage}</div>
        </div>
    );
  }
}

export default Block;

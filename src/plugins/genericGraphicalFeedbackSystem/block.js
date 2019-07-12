import React, { Component } from "react";
import Smiley from "./Smiley/index"
class Block extends Component {
  constructor() {
    super();
    this.state = {
      newPercentage: 0,
      savedPercentage: 0,
      savedPercentageX: 0,
      savedPercentageY: 0
    };
  }

  handleMouseLeave = e => {
    e.target.style.backgroundSize =
      this.state.savedPercentageX.toString() +
      "px" +
      " " +
      this.state.savedPercentageY.toString() +
      "px";
    this.setState({ newPercentage: this.state.savedPercentage });
  };

  setPercentage = e => {
    var rect = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var elementWidth = rect.width;
    var percentage = Math.floor((x / elementWidth) * 100);
    var points = percentage / 10;
    this.setState({
      savedPercentage: points,
      savedPercentageX: x,
      savedPercentageY: rect.height
    });
    this.props.percentage(this.props.title, points);
  };

  handleMouseMove = e => {
    var rect = event.target.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var elementWidth = rect.width;
    var percentage = Math.floor((x / elementWidth) * 100);
    var points = percentage / 10;
    var backgroundSize = x.toString()+"px"+" "+rect.height.toString()+"px";
    e.target.style.backgroundSize = backgroundSize;
    this.setState({ newPercentage: points });
  };
  
  render() {
    return (
      <div className="row  mb-3">
        <span className="blockTitle text-left">{this.props.title}</span>
        <div className="col p-0 mr-3">
          <div id="outerDiv">
            <div
              id="scroller"
              onMouseLeave={e => this.handleMouseLeave(e)}
              onPointerMove={e => this.handleMouseMove(e)}
              onClick={e => this.setPercentage(e)}
            />
            <div id="percentage" className="">
              {this.state.newPercentage}
            </div>
          </div>
        </div>
        <span><Smiley  mood={this.state.savedPercentage}/></span>
      </div>
    );
  }
}

export default Block;

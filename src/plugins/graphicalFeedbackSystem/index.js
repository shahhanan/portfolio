import React, { Component } from "react";
import Block from "./block";

class GraphicalFeedbackSystem extends Component {
  constructor(){
    super();
    this.state={
      Design:0,
      Responsiveness:0,
      SomeThing:0,
      dataObj:{}
    }
  }
  setDesignPercentage = (newPercentage) =>{
    this.setState({Design: newPercentage});
  }
  setResponsivenessPercentage = (newPercentage) =>{
    this.setState({Responsiveness: newPercentage});
  }
  setSomeThingPercentage = (newPercentage) =>{
    this.setState({SomeThing: newPercentage});
  }
  render() {
    return (
      <div className="container">
       <Block title="Design" percentage={this.setDesignPercentage.bind(this)}/>
       <Block title="Responsiveness" percentage={this.setResponsivenessPercentage.bind(this)}/>
       <Block title="SomeThing" percentage={this.setResponsivenessPercentage.bind(this)}/> 
      </div>
    );
  }
}

export default GraphicalFeedbackSystem;

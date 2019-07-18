import React, { Component } from "react";
import SkillsPieChart from "./SkillsPieChart";
import SkillsHorizontalBarChart from "./SkillsHorizontalBarChart";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Skills">
        <h1>Skills</h1>
        <div className="technologiesContainer">
          <span className="technologiesUsed">
            Technologies I Commonly use for Developmnt.
          </span>
          <SkillsPieChart  />
        </div>
        <div className="SkillsIndicator">
          <SkillsHorizontalBarChart    />
        </div>
      </div>
    );
  }
}

export default Skills;

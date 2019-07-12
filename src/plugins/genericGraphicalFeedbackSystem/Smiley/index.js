import React, { Component } from "react";
class Smiley extends Component {
  constructor() {
    super();
    this.state = {
      mood: "default/default",
      prevMood: "default"
    };
  }

  componentWillReceiveProps = nextProps => {
    let midPath = "";
    let prevScore = this.state.prevMood;
    if (!nextProps.mood == 0) {
      if (nextProps.mood != undefined && typeof nextProps.mood != Number) {
        if (nextProps.mood <= 3.3) {
          midPath = "sad";
        } else if (nextProps.mood >= 3.4 && nextProps.mood <= 6.6) {
          midPath = "medium";
        } else {
          midPath = "happy";
        }
      }
      if (midPath != prevScore) {
        var randomGenerator = Math.floor(Math.random() * 8 + 1);
        this.setState({
          mood: midPath + "/" + randomGenerator,
          prevMood: midPath
        });
      }
    }
  };
  render() {
    return (
      <div>
          <svg className="smiley">
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={"assets/images/emoticons-svg/"+this.state.mood+".svg#Layer_1"}
          />
        </svg> 
        </div>
    );
  }
}

export default Smiley;

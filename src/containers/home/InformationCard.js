import React, { Component } from "react";

class InformationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DOB: "10/19/1992"
    };
    this.getAge = this.getAge.bind(this);
  }
  getAge = (DOB) => {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age = age - 1;
    }
    return age;
  }
  render() {
    return (
      <div className="Information-Card">
          <div className="heading">
              <span className="name">Hi I'm <h3 className="bold-Name">Hanan Shabir</h3></span>
              <span className="designation">Full Stack Developer</span>
              <hr />
              <div className="info-tabs">
              <div className="info-line"><span className="text-label">AGE</span>{this.getAge(this.state.DOB)}</div>
              <div className="info-line"><span className="text-label">ADDRESS</span>JP Nagar 7th Phase, INDIA</div>
              <div className="info-line"><span className="text-label">EMAIL</span>shah.hanan51@gmail.com</div>
              <div className="info-line"><span className="text-label">PHONE</span>+91 7006556648</div>
              <div className="info-line"><span className="text-label">FREELANCE</span><b>AVAILABLE</b></div>
              </div>
          </div>
      </div>
    );
  }
}

export default InformationCard;
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

class FontAwosmeWrapper extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }
  render() {
    return (
      <li
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
      >
        {!this.state.isHovering ? (
          <NavLink to={"/" + this.props.text} className="nav-link" activeClassName="active">
            <FontAwesomeIcon icon={this.props.name} />
          </NavLink>
        ) : (
          <NavLink to={"/" + this.props.text} className="nav-link" activeClassName="active">
            <span className="liText">{this.props.text}</span>
          </NavLink>
        )}
      </li>
    );
  }
}

export default FontAwosmeWrapper;

/*   fa-address-card  fa-code */

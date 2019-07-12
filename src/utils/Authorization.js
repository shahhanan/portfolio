import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
/**
 * HOC that Handles whether or not the user is allowed to see the page.
 * @param {array} allowedRoles - user roles that are allowed to see the page.
 * @returns {Component}
 */
export default function Authorization(allowedRoles) {
  return WrappedComponent => {
    class WithAuthorization extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        const { user } = this.props;
        if (allowedRoles.includes(user.role)) {
          return <WrappedComponent {...this.props} />;
        } else {
          return (
            <div className="container">
              <div className="row align-items-center" style={{ height: 500 }}>
                <div className="col">
                  <h2 className="text-center">
                    You Don't have access to this page
                  </h2>
                </div>
              </div>
            </div>
          );
        }
      }
    }
    WithAuthorization.propTypes = {
      user: PropTypes.object
    };
    return connect(state => {
      return { user: state.login };
    })(WithAuthorization);
  };
}

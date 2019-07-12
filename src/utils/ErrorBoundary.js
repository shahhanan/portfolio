import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true, error: error, errorInfo: info });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="app flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="mr-4 text-center">
                  <div className="display-3">500</div>
                  <div className="font-xl">We have a problem!</div>
                </div>
              </div>
              <div className="col-6">
                <details style={{ whiteSpace: "pre-wrap" }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

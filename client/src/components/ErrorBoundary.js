/**
 *    Error Component
 *        Display errorMessage
 */
import React, { Component } from "react";
import * as Sentry from "@sentry/browser";
import errorImage from "../../src/trivia_actually_general_error.png";

Sentry.init({
  dsn: "https://14046d5a1deb4c6984848ff2cb886a44@sentry.io/1355493"
});

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    if (this.state.error) {
      //render fallback UI
      return (
        <div id="error-message">
          <img src={errorImage} alt="OopsError" />
          <h3 className="hel-black">Oh, God. I am so in the wrong.</h3>
          <h4 className="hel-neue-normal">Please refresh the page and try again.</h4>
          {/* eslint-disable-next-line */}
          <a target="_blank" rel="noopener noreferrer" onClick={() => Sentry.showReportDialog()}>
            report
          </a>
        </div>
      );
    } else {
      //when there's not an error, render children untouched
      return this.props.children;
    }
  }
} // end of ErrorBoundary component

export default ErrorBoundary;

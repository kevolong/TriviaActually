import React from "react";
import ReactDOM from "react-dom";
import TriviaApp from "./TriviaApp";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://14046d5a1deb4c6984848ff2cb886a44@sentry.io/1355493"
});

ReactDOM.render(<TriviaApp />, document.getElementById("trivia-app"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

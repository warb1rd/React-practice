import React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => {
  render(<App />, document.getElementById("app"));
} 
renderApp();

if(module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  })
}

// jsx transpiles to createElement calls.
// Arrow function has implicit return function in a one liner
// Higher order component - encapsulate behavior but not styling or markup

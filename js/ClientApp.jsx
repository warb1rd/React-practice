import React from "react";
import { render } from "react-dom";
 
const App = () => {                                //Arrow function has implicit return function
  return (
    <div className="app">
      <div className="landing">
        <h1>Moving Pictures</h1>
        <input type="text" placeholder="Search" />
        <a> Browse All</a>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));

//jsx transpiles to createElement calls.

import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const App = () =>(
    <BrowserRouter>                                    
      <div className="app">
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
      
      </div>
    </BrowserRouter>
  );

render(<App />, document.getElementById("app"));

// jsx transpiles to createElement calls.
// Arrow function has implicit return function in a one liner
// Higher order component - encapsulate behavior but not styling or markup

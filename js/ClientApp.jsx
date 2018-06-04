import React from "react";
import { render } from "react-dom";
 
const ce = React.createElement;

const MyTitle = function(props) {
  return ce("div", null, ce("h1", { style: { color: props.color } }, props.title));
};

const Component = function() {
  return ce("div",{ id: "Component" },
    ce(MyTitle, { title: "Star Trek", color: "YellowGreen" }),
    ce(MyTitle, { title: "Stranger Things", color: "GreenYellow" }),
    ce(MyTitle, { title: "Rick and Morty", color: "DodgerBlue" }),
    ce(MyTitle, { title: "Firefly", color: "Peru" })
  );
};

render(ce(Component), document.getElementById("app"));

//jsx transpiles to createElement calls.

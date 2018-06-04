import React from "react";
import { render } from "react-dom";
 
const CE = React.createElement;
const MyTitle = function(props) {
  return CE("div", null, CE("h1", { style: { color: props.color } }, props.title));
};
const Component = function() {
  return CE("div",{ id: "Component" },
    CE(MyTitle, { title: "Star Trek", color: "YellowGreen" }),
    CE(MyTitle, { title: "Stranger Things", color: "GreenYellow" }),
    CE(MyTitle, { title: "Rick and Morty", color: "DodgerBlue" }),
    CE(MyTitle, { title: "Firefly", color: "Peru" })
  );
};
ReactDOM.render(CE(Component), document.getElementById("app"));

//jsx transpiles to createElement calls.

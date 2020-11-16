import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Component />
    </HashRouter>,
    document.getElementById("root")
  );
};

render(App);

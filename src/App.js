import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import TestFile from "./TestFile";
import Main from "./Main";
import ProjectPrint from "./ProjectPrint";

import Project from "./Project";
import NavBar from "./NavBar";
import Threejs from "./Main";

function App() {
  return (
    <div>
      <ProjectPrint />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import TestFile from './TestFile';
import Main from './Main';
import ProjectPrint from './ProjectPrint';
import gif from "./assets/img/backgroundFont.gif";
import Rabbit from './Rabbit/Rabbit';


function App(){
    return (
      <div>
        <Main/>

      </div>
    )
}

export default App;

// <Switch>
//   <Route exact path='./Rabbit/Rabbit' component={Rabbit}/>
// </Switch>

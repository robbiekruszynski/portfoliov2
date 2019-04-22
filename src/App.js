import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import TestFile from './TestFile';
import Main from './Main';
import ProjectPrint from './ProjectPrint';
import gif from "./assets/img/backgroundFont.gif";
import Rabbit from './Rabbit/Rabbit';
import Jirn from './Jirn/Jirn';
import eightNine from './eightNine/eightNine';
import Project from './Project';


function App(){
    return (
      <div>
        <Project/>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/Rabbit' component={Rabbit}/>
            <Route path='/Jirn' component={Jirn}/>
            <Route path='/eightNine' component={eightNine}/>
          </Switch>

      </div>
    )
}

export default App;

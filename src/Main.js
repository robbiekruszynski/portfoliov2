import React, {Component } from 'react';
import pic from "./assets/img/jodo.jpg";
import './App.css';
import styled from 'styled-components';
import logo from './logo.svg';
import JodoSpeak from './JodoSpeak';
import threeEntryPoint from "./threejs/threeEntryPoint"
// import "./App.css"

export default class Header extends Component {

    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
          <div>
            <div className="header-header" ref={element => this.threeRootElement = element}></div>
            <div><JodoSpeak/></div>
            </div>
        );
    }
}


// export default Main;

// <div className="App">
// <header className="App-header">
// <img src={pic} className="App-logo" alt="logo" />
// className="App-link"
// href="https://reactjs.org"
// target="_blank"
// rel="noopener noreferrer"
// >
// Learn React
// </a>
//
// </header>
// </div>

import React, {Component } from 'react';
import gif from "./assets/img/backgroundFont.gif";
import './App.css';
import styled from 'styled-components';
import logo from './logo.svg';
import ProjectPrint from './ProjectPrint';
import threeEntryPoint from "./threejs/threeEntryPoint";
import NavBar from "./NavBar";
import Rabbit from './Rabbit/Rabbit';


export default class Header extends Component {

    componentDidMount() {
        threeEntryPoint(this.threeRootElement);
    }

    render () {
        return (
          <div>

            <div><NavBar/></div>

            <div className="header-header" ref={element => this.threeRootElement = element}></div>
            <div><ProjectPrint/></div>
            <div><Rabbit/></div>
            </div>
        );
    }
}

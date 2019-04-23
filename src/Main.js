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
      const Big = styled.div`
        height:100%;
      `;

      const Canvas = styled.div`
      height: 1000px;
      `;
        return (
          <Canvas>
            <div><NavBar/></div>
            <Big className="header-header" ref={element => this.threeRootElement = element}></Big>
          </Canvas>
        );
    }
}

// <div><ProjectPrint/></div>

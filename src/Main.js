import React, {Component } from 'react';
import './App.css';
import styled from 'styled-components';
import logo from './logo.svg';
import ProjectPrint from './ProjectPrint';
import threeEntryPoint from "./threejs/threeEntryPoint";
import NavBar from "./NavBar";
import Rabbit from './Rabbit/Rabbit';


class Threejs extends Component {

    componentDidMount() {
    threeEntryPoint(this.threeRootElement);
    }

    render () {

      const Big = styled.div`
      height: 100vh;
      width: 100vw;
      `;
        return (
          <div>
            <Big className="header-header" ref={element => this.threeRootElement = element}></Big>
          </div>
        );
    }
}


export default Threejs;

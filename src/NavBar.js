import React from 'react';
import styled from 'styled-components';
import gif from "./assets/img/backgroundFont.gif";
import Project from './Project';




function NavBar() {
  const Name = styled.h1`
  color: black;
  text-align: center;
  font-size: 80px;
  @media screen and (max-width:600px) {
  font-size: 60px;
  }
  `;

  return (
    <div>
    <Project/>
    </div>
  )
}


export default NavBar;

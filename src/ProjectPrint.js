import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';


function ProjectPrint() {
  const Test = styled.p`
  color: red;
  `;
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
      <Name>
      Roberto Francisco Kruszynski
      </Name>
      </div>
    )

}


export default ProjectPrint;

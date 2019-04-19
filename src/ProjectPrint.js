import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';


function ProjectPrint() {
  const Test = styled.p`
  color: red;
  `;
    return (
      <div>
        <div><Project/></div>
      </div>
    )

}


export default ProjectPrint;

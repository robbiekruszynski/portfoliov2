import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';


export class ProjectPrint extends React.Component {
constructor(props){
  super();
  this.state = { name: "Roberto Francisco Kruszynski", link: null };
  }

render(){
  setTimeout(() =>{
    this.setState ({ name: "Roberto Francisco Kruszynski", link:<Link href = "https://github.com/Robbiekruszynski">GitHub</Link> });
  } , 2000)

  const Name = styled.h1`
  color: #525151;
  text-align: center;
  font-size: 80px;
  @media screen and (max-width:600px) {
  font-size: 60px;
  }
  `;

  const Link = styled.a`
  display:flex;
  justify-content: center;
  color: black;


  `;

  return (
    <div>
    <Name>
    {this.state.name}
    </Name>
    {this.state.link}
    </div>
  )


  }
}

export default ProjectPrint;

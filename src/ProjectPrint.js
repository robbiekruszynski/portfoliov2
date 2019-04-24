import React, { Component } from 'react';
import Project from './Project';
import styled from 'styled-components';


export class ProjectPrint extends React.Component {
  constructor(props){
    super();
    this.state = {link: null };
  }

  render(){
  let timerId = setTimeout(() =>{
      this.setState ({link:<Link href = "https://github.com/Robbiekruszynski">GitHub</Link> });
    } , 1000)
    clearTimeout(timerId);


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

    const Words = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0px;
    opacity: 0;
    animation-iteration-count: 1;
    -webkit-animation: fadein 6s normal forwards;
        -moz-animation: fadein 6s normal forwards;
         -ms-animation: fadein 6s normal forwards;
          -o-animation: fadein 6s normal forwards;
             animation: fadein 6s normal forwards;

           @keyframes fadein {
            from { opacity: 0; }
            to   { opacity: 1; }
         }
    `;


    return (
      <div>
        <Name>
        Robert Francisco Kruszynski
        </Name>
        <Words>
        Design
        / / 
        Develop
        </Words>
        {this.state.link}
      </div>
    )

  }
}

export default ProjectPrint;

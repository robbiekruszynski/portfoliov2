import React, {Component } from 'react';
import styled from 'styled-components';
import sketch from '../assets/img/sketch.png';
import pic1 from '../assets/img/frame1.png';
import pic2 from '../assets/img/frame2.png';
import pic3 from '../assets/img/frame3.png';

function eightNine() {
  const Text = styled.h1`
  text-align: center;
  `;

  const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 80vw;

  `;
  const Center = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

  return(
<Center>
  <Text>Concept to Creation</Text>
    <h3>Team brainstorm</h3>
    <Img src = { sketch }/>
    <h3>Wire-framing / prototyping using Sketch</h3>
    <Img src = { pic1 }/>
    <Img src = { pic2 }/>
    <Img src = { pic3 }/>
    <h1><a href="https://spawntrnr8998.firebaseapp.com">Live deployment</a></h1>
</Center>

  )
}


export default eightNine;

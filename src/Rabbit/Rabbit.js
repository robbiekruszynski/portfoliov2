import React, {Component } from 'react';
import styled from 'styled-components';
import pic from '../assets/img/RabbitLogo.png';
import picTwo from '../assets/img/RabbitLogoTwo.png';
import wire from "../assets/img/prototype.png";


function Rabbit() {
  const Center = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

  const Img = styled.img`
  display: flex;
  justify-content: center;
  width: 80vw;
  `;

  return(
<Center>
  <h3>Wire framing / Prototyping</h3>
  <h4>Sketch v53.2</h4>
  <Img src = { wire }/>
  <h3> Logo Concepts</h3>
  <img src = { pic }/> <img src = { picTwo }/>
</Center>

  )
}


export default Rabbit;

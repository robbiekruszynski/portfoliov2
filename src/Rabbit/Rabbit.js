import React, {Component } from 'react';
import styled from 'styled-components';
import pic from '../assets/img/rabbitLogoWork.png';
import wireTwo from '../assets/img/rabbitMobile.png';
import wire from "../assets/img/rabbitDesktop.png";


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
  margin-top: 20px;

  `;

  return(
<Center>
  <h3>Wire framing / Prototyping</h3>
  <h4>Sketch v53.2</h4>
  <Img src = { wire }/>
  <Img src = { wireTwo }/>
  <h3> Logo Concepts</h3>
  <img src = { pic }/>
</Center>

  )
}


export default Rabbit;

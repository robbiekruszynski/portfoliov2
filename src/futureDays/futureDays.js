import React, {Component } from 'react';
import styled from 'styled-components';
import pic from "../assets/img/futureDayslogo.png";


function FutureDays() {
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
      <h3> Logo Concepts</h3>
      <Img src = { pic }/>
    </Center>
  )
}

export default FutureDays;

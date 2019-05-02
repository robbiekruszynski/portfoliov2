import React, {Component } from 'react';
import styled from 'styled-components';
import  pic  from '../assets/img/Jirn1.png';
import picTwo from '../assets/img/Jirn2.png';
import picThree from '../assets/img/Jirn3.png';
import picFour from '../assets/img/Jirn4.png';

function Jirn() {

  const Center = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `;

  const Img = styled.img`
  display: flex;
  display: items row;
  justify-content: space-between;
  margin-top: 20px;
  border: 1px solid red;
  width: 30%;
  `;

  return(
<Center>
  <h3>Team project HTML5, CSS, API's, JavaScript, JQuery</h3>
<Img src = { pic }/>
<Img src = { picTwo }/>
<Img src = { picThree }/>
<Img src = { picFour }/>
  <h1><a href="https://ngwessels.github.io/JIRN/">Live deployment</a></h1>

</Center>

  )
}


export default Jirn;

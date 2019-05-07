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
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  width: 50%;
  `;

  return(
<Center>
  <h3>Team project HTML5, CSS, API's, JavaScript, JQuery</h3>
  <h3>A user can submit their city of choice (current functionality only supports Portland, OR) and view a cultivated selection of the best quality restaurants in the displayed map. The restaurants are organized by region and, once clicked, the user is guided to a new page containing contact details and menus displayed across multiple slides for maximum accessibility. From here, the user is armed with the information they need to either order what they like from the restaurant (separate from the website) or to return to the navigation page to explore other options.</h3>
  <h1><a href="https://ngwessels.github.io/JIRN/">Live deployment</a></h1>
<Img src = { picTwo }/>
<Img src = { picThree }/>
</Center>

  )
}


export default Jirn;

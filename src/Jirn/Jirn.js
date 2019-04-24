import React, {Component } from 'react';
import styled from 'styled-components';
import  pic  from '../assets/img/Jirn1.png';
import picTwo from '../assets/img/Jirn2.png';
import picThree from '../assets/img/Jirn3.png';
import picFour from '../assets/img/Jirn4.png';

function Jirn() {

  const Img = styled.img`
  display:flex;
  flex-direction: row;
  justify-content: center;
  width: 500px;
  height:500px;
  `;

  const ImgTwo = styled.img`
  width: 700px;
  height:300px;
  `;

  return(
<div>
<Img src = { pic }/>
<Img src = { picTwo }/>
<ImgTwo src = { picThree }/>
<ImgTwo src = { picFour }/>
<p>Test</p>
</div>

  )
}


export default Jirn;

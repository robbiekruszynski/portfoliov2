import React, {Component } from 'react';
import styled from 'styled-components';
import pic from '../assets/img/RabbitLogo.png';
import picTwo from '../assets/img/RabbitLogoTwo.png';


function Rabbit() {

  return(
<div>
<img src = { pic }/>
<img src = { picTwo }/>
</div>

  )
}


export default Rabbit;

import React from 'react';
import styled from 'styled-components';
import gif from "./assets/img/backgroundFont.gif";



function NavBar() {
  const Name = styled.h1`
  color: black;
  text-align: center;
  font-size: 80px;
  `;

  return (
    <div>
    <Name>
    Roberto Francisco Kruszynski
    </Name>
    </div>
  )
}


export default NavBar;

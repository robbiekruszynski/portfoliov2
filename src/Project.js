import React from 'react';
import TestFile from './TestFile';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pic from './assets/img/dad.jpg';
import './styles.scss';

function Project() {

  const JodoFilm = styled.div`
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 1px solid black;
    justify-content: space-around;
    `;

    const JodoBreak = styled.div`
    border:1px grey dotted;
    display: flex;
    flex-direction: center;
    justify-content: center;
    text-align: center;
    width:33%;
    `;

  const JodoMovies= [
    {
    Title:"Home",
    Description:<Link to="/">Link</Link>,
    },

    {
    Title: "Jirn",
    Description: <Link to ="/Jirn">Link</Link>,
    },
    {
    Title: "89/98",
    Description: <Link to ="/eightNine">Link</Link>,
    },
    {
    Title: "LuckyRabbit",
    Description: <Link to="/rabbit">Link</Link>,
    }
  ];

  return(
    <div className="main">
    <img src = { pic } className="img"/>
    <JodoFilm className='bg-pink menu'>
      {JodoMovies.map((item, index) =>
        <JodoBreak>
        <TestFile Title={item.Title}
        Description={item.Description}
        key={index}/>
        </JodoBreak>
      )}
      </JodoFilm>
      </div>
  );
}

export default Project;

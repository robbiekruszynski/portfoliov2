import React from 'react';
import TestFile from './TestFile';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    <JodoFilm>
      {JodoMovies.map((item, index) =>
        <JodoBreak>
        <TestFile Title={item.Title}
        Description={item.Description}
        key={index}/>
        </JodoBreak>
      )}
    </JodoFilm>
  );
}

export default Project;

import React from 'react';
import TestFile from './TestFile';
import styled from 'styled-components';
function JodoLove() {

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
    Title: "La cravate",
    Year: "(1957)",
    },
    {
    Title: "Teatro sin fin",
    Year: "(1965)",
    },
    {
    Title: "Fando and Lis",
    Year: "(1968)",
    },
    {
    Title: "El Topo",
    Year: "(1970)",
    },
    {
    Title: "The Holy Mountain",
    Year: "(1973)",
    },
    {
    Title: "Santa Sangre",
    Year: "(1989)",
    },
    {
    Title: "The Rainbow Thief",
    Year: "(1990)",
    },
    {
    Title: "The Dance of Reality",
    Year: "(2013)",
    },
    {
    Title: "Endless Poetry",
    Year: "(2016)",
    }
  ];

  return(
    <JodoFilm>
      {JodoMovies.map((item, index) =>
        <JodoBreak>
        <TestFile Title={item.Title}
        Year={item.Year}
        key={index}/>
        </JodoBreak>
      )}
    </JodoFilm>
  );
}

export default JodoLove;

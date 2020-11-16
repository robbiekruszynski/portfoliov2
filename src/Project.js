import React from "react";
import TestFile from "./TestFile";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import pic from './assets/img/rk.jpg';
import "./styles.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.menu = {
      display: "none",
    };
    this.state = {
      activeClass: false,
    };
    this.extend = this.extend.bind(this);
  }
  extend() {
    if (this.state.activeClass === false) {
      this.setState({ activeClass: true });
    } else {
      this.setState({ activeClass: false });
    }
  }

  render() {
    const JodoFilm = styled.div`
      color: black;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      border: 1px solid white;
      justify-content: space-around;
    `;

    const JodoBreak = styled.div`
      border: 1px white dotted;
      display: flex;
      flex-direction: center;
      justify-content: center;
      text-align: center;
      width: 33%;
    `;

    const JodoMovies = [
      {
        Title: "Home",
        Description: <Link to="/">Link</Link>,
      },

      {
        Title: "Jirn",
        Description: <Link to="/Jirn">Link</Link>,
      },

      {
        Title: "89/98",
        Description: <Link to="/eightNine">Link</Link>,
      },

      {
        Title: "LuckyRabbit",
        Description: <Link to="/rabbit">Link</Link>,
      },

      {
        Title: "Future Days",
        Description: <Link to="/FutureDays">Link</Link>,
      },
    ];
    return (
      <div>
        <div
          className={
            false === this.state.activeClass ? "header hide" : "header show"
          }
        ></div>
      </div>
    );
  }
}

export default Project;

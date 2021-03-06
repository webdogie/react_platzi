import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Landing.css';
import landing from '../images/landing.svg';
import conf_logo from '../images/conf-logo.svg';

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <div className="landing-container__info">
          <img src={conf_logo} alt="" />
          <h1>PRINT YOUR BADGES</h1>
          <p>The easiest way to manage your conference</p>
          <div className="Badges__buttons">
            <Link to="/react_platzi/badges/" className="btn btn-primary">
              Start
            </Link>
          </div>
        </div>

        <img src={landing} alt="Logo" className="hero_img" />
      </div>
    );
  }
}

export default Landing;

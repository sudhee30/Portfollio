import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="page home">
      <div className="home-content">
        <div className="career-objective">
          <h1>Hi, I'm <span className="highlight">Sudheeksha S</span></h1>
          <p>
            I aim to grow as a <span className="highlight">problem-solving engineer</span> who blends
            creativity with technology, building real-world solutions that make an <span className="highlight">impact</span>.
            I'm passionate about <span className="highlight">learning fast</span>, collaborating smartly, and never giving up until the job is done.
          </p>
          <div className="home-buttons">
            <Link to="/about" className="themed-btn">About Me</Link>
            <Link to="/contact" className="themed-btn">Contact</Link>
          </div>
        </div>
        <div className="photo-container">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

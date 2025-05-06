import React from 'react';
import './Achievements.css';
// eslint-disable-next-line
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheckCircle } from 'react-icons/fa';


// Images for the carousel
// eslint-disable-next-line
import image1 from '../assets/achievement1.jpeg';
// eslint-disable-next-line
import image2 from '../assets/achievement2.jpeg';
// eslint-disable-next-line
import image3 from '../assets/achievement3.jpeg';

const achievementsData = [
  {
    title: 'Hackathon Achievements',
    description: [
      'Prompt Legacy 2nd Runner up, KEC',
      '1st Prize for BIOBRIQUETTES project in Intercollege Ideation Hackathon 2022-23 at Cauvery College for Women, Trichy.',
      '1st Prize for Automatic Tarpaulin Closure System project in National Level Technical Symposium 2023-24 at SKCET, Cbe.',
    ],
  },
  {
    title: 'Awards and Recognitions',
    description: [
      'Premier Institution Winners Award in Annual Day 2023-24.',
      'Global Nominee Award for projects Shadow Nova (2023) and ExoMatch (2024) in NASA Space Apps Challenge.',
      'Advanced to Stage 2 of CII Young Indians IDS 4.0 for Releaves project.',
    ],
  },
  {
    title: 'Sports and Competitions',
    description: [
      'Ranked Top 25 Intracollege teams in SIH 2022-23 for Nerd\'O Card.',
      'Handball player, represented Erode district and Anna University at various handball tournaments.',
    ],
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h1 className="achievements-title">My Achievements</h1>
      
      {/* Carousel Section */}
      {/* <div className="carousel-section">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          emulateTouch
          interval={4000}
          transitionTime={1000}
        >
          <div>
            <img src={image1} alt="Achievement 1" />
            <p className="legend">Achievement 1</p>
          </div>
          <div>
            <img src={image2} alt="Achievement 2" />
            <p className="legend">Achievement 2</p>
          </div>
          <div>
            <img src={image3} alt="Achievement 3" />
            <p className="legend">Achievement 3</p>
          </div>
        </Carousel>
      </div> */}

      {/* Achievement Data */}
      <div className="achievements-list">
        {achievementsData.map((achievement, index) => (
          <div key={index} className="achievement-item">
            <h2 className="achievement-title">{achievement.title}</h2>
            <ul className="achievement-description">
              {achievement.description.map((desc, idx) => (
                <li key={idx} className="description-item">
                  <FaCheckCircle className="icon" /> {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

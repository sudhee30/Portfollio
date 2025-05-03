import React from 'react';
import './About.css';
import { FaDownload } from 'react-icons/fa';

function About() {
  return (
    <div className="about-page">
      <h1 className="section-title">About Me</h1>

      <div className="education-section">
        <h2>Education</h2>
        <ul>
          <li><strong>B.TECH AIML - 2026</strong><br />Kongu Engineering College, Perundurai<br />CGPA: 8.42% (Upto 5th Sem)</li>
          <li><strong>HSC - 2022</strong><br />Sri Lathangi Vidhya Mandir, Pollachi<br />Percentage: 93.8%</li>
          <li><strong>SSLC - 2020</strong><br />Sri Lathangi Vidhya Mandir, Pollachi<br />Percentage: 97.2%</li>
        </ul>
      </div>

      <div className="skills-section">
        <h2>Skill Sets</h2>
        <div className="skills-list">
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Deep Learning</span>
          <span>SQL</span>
          <span>Power BI</span>
          <span>Excel</span>
          <span>Tableau</span>
          <span>Snowflake</span>
        </div>
      </div>

      <div className="leadership-section">
        <h2>Leadership Roles</h2>
        <div className="leadership-container">
          <div className="leadership-line"></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Chairman</strong> – Red Ribbon Club, KEC (2024–25)</p></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Event Organizer</strong> – Women’s Development Cell, KEC (2023–25)</p></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Treasurer</strong> – Red Ribbon Club, KEC (2023–24)</p></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Additional Treasurer</strong> – ISTE Chapter, KEC (2024–25)</p></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Sports Captain</strong> – KEC (2022–23)</p></div>
          <div className="leadership-item"><span className="dot"></span><p><strong>Active Member</strong> – Robotics Club, KEC (2023–24)</p></div>
        </div>
      </div>

      <div className="resume-section">
        <a href="resume.pdf" className="resume-btn" download>
          <FaDownload style={{ marginRight: "8px" }} />
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import './Projects.css';
import { FaGithub, FaChartBar, FaBrain, FaPlane, FaMicroscope, FaUsers, FaTable } from 'react-icons/fa';

const projects = [
  {
    title: 'Disease Prediction - ML',
    icon: <FaMicroscope />,
    description: 'ML-based disease predictor to classify arthritis types using various machine learning algorithms.',
    link: 'https://github.com/yourusername/disease-prediction-ml'
  },
  {
    title: 'Flight Ticket Price Prediction - ML',
    icon: <FaPlane />,
    description: 'Predict flight fares using ML algorithms for better travel planning and budgeting.',
    link: 'https://github.com/sudhee30/Flight-Price-Prediction-using-ML'
  },
  {
    title: 'Brain Tumor Detection - DL',
    icon: <FaBrain />,
    description: 'A CNN-based deep learning model to accurately detect brain tumors from MRI scans.',
    link: 'https://github.com/sudhee30/Brain-Tumor-Prediction-Using-DL'
  },
  {
    title: 'HR Analytics Dashboard - Power BI',
    icon: <FaChartBar />,
    description: 'Power BI dashboard visualizing workforce insights, trends, and key HR metrics.',
    link: 'https://github.com/sudhee30/HR-Analysis-Dashboard'
  },
  {
    title: 'Customer Segmentation - Power BI',
    icon: <FaUsers />,
    description: 'Customer segmentation dashboard using Power BI to understand user behavior and segments.',
    link: 'https://github.com/sudhee30/Customer-Segmentation-Dashboard'
  },
  {
    title: 'Data Scientist Salary Analysis - Tableau',
    icon: <FaTable />,
    description: 'Interactive Tableau dashboard analyzing data scientist salaries across industries.',
    link: 'https://github.com/sudhee30/Data-Scientist-Salary-Analysis-Dashboard'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="icon-container">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              <FaGithub /> View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

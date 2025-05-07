import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Get in Touch</h1>

      <div className="contact-content">
        {/* Contact Information */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>sudheekshasenthilkumar@gmail.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

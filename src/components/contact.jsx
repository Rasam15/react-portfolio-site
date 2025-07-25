// src/components/Contact.jsx

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section" id="contact">
  <h2>Contact Me</h2>
     
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Your Name" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="Your Email" required />
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Your Message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="container-list">
          <div className="list-item">
            <p className="footer-h2">Why Spring</p>
            <ul>
              <li>Microservices</li>
              <li>Reactive</li>
              <li>Event Driven</li>
              <li>Cloud</li>
              <li>Web Applications</li>
              <li>Serverless</li>
              <li>Batch</li>
            </ul>
          </div>
          <div className="list-item">
            <p className="footer-h2">Learn</p>
            <ul>
              <li>Quickstart</li>
              <li>Guides</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="list-item">
            <p className="footer-h2">Community</p>
            <ul>
              <li>Events</li>
              <li>Team</li>
            </ul>
          </div>
          <div>
            <p className="footer-h2">Projects</p>
            <p className="footer-h2">Training</p>
            <p className="footer-h2">Support</p>
            <p className="footer-h2">Thank you</p>
          </div>
        </div>
        <div className="container-sumbition">
          <div>
            <p className="get-news">Get the Spring newsletter</p>
          </div>
          <div>
            <input className="email" type="email" name="" placeholder="Email Address" />
            <input className="subscribe" type="button" value="SUBSCRIBE" />
          </div>
          <div className="child-input-area">
            <input type="checkbox" name="ch1" />
            <p className='confirm-text'>
              Yes, I would like to be contacted by The Spring Team and VMware for newsletters, promotions and events
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

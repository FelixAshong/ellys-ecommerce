import React, { useState } from 'react';
import './Newsletter.css';
import { FaArrowRight } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const ArrowRightIcon = FaArrowRight as any;

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay in the Loop</h2>
            <p>Join our community for exclusive offers, new arrivals, and sustainable fashion tips</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="email-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary">Sign Up <ArrowRightIcon className="btn-icon" /></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

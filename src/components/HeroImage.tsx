import React from 'react';
import './HeroImage.css';
import { FaArrowRight } from 'react-icons/fa';

const ArrowRightIcon = FaArrowRight as any;

const HeroImage: React.FC = () => {
  return (
    <section className="hero-image-section">
      <div className="hero-image-container">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop" 
            alt="Fashion Model" 
            className="main-hero-image"
          />
        </div>
        <div className="hero-content">
          <h2 className="hero-title">Essentials Refined</h2>
          <button className="hero-btn">
            SHOP NOW <ArrowRightIcon className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;

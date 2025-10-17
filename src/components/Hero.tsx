import React from 'react';
import './Hero.css';
import { FaArrowRight } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const ArrowRightIcon = FaArrowRight as any;

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">Style for Everyone, Everywhere</h2>
            <p className="hero-description">
              Discover the latest trends in men's, women's, and children's clothing. From casual wear to formal attire, we have everything you need to express your unique style.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Shop Now <ArrowRightIcon className="btn-icon" /></button>
              <button className="btn btn-secondary">Browse Categories <ArrowRightIcon className="btn-icon" /></button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=600&fit=crop" alt="Fashion Model" className="main-image" />
              <div className="image-overlay"></div>
            </div>
            <div className="hero-side-images">
              <div className="side-image">
                <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=120&fit=crop" alt="Clothing Item" />
              </div>
              <div className="side-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=120&fit=crop" alt="Clothing Item" />
              </div>
              <div className="side-image">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=120&fit=crop" alt="Clothing Item" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">30k+</div>
            <div className="stat-label">Happy Customers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">New Products</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50M+</div>
            <div className="stat-label">Followers</div>
          </div>
        </div>
      </div>
      <div className="hero-bg-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
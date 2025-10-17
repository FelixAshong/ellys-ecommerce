import React from 'react';
import './PromotionalBanner.css';
import { FaArrowRight } from 'react-icons/fa';

const ArrowRightIcon = FaArrowRight as any;

const PromotionalBanner: React.FC = () => {
  return (
    <section className="promotional-banner">
      <div className="banner-content">
        <div className="banner-text">
          <div className="banner-badge">New Collection</div>
          <h1 className="banner-title">Up to 50% Off</h1>
          <p className="banner-subtitle">Fresh styles for the whole family</p>
        </div>
        
        <div className="banner-categories">
          <div className="category-box">
            <h3>View All Sale</h3>
            <p>Everything on sale</p>
          </div>
          <div className="category-box">
            <h3>Men's</h3>
            <p>Shirts & Tops</p>
          </div>
          <div className="category-box">
            <h3>Women's</h3>
            <p>Dresses & More</p>
          </div>
          <div className="category-box">
            <h3>Children's</h3>
            <p>Kids Collection</p>
          </div>
          <div className="category-box">
            <h3>Accessories</h3>
            <p>Bags & More</p>
          </div>
          <div className="category-box">
            <h3>New Arrivals</h3>
            <p>Latest Styles</p>
          </div>
        </div>
        
        <div className="banner-cta">
          <button className="btn btn-primary">Shop Now <ArrowRightIcon className="btn-icon" /></button>
        </div>
      </div>
      
      <div className="banner-disclaimer">
        <p>Valid on selected items only. While stocks last. See website for full terms & conditions.</p>
      </div>
    </section>
  );
};

export default PromotionalBanner;

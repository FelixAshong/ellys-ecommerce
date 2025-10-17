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
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop" alt="Sale Items" />
            </div>
            <div className="category-content">
              <h3>View All Sale</h3>
              <p>Everything on sale</p>
            </div>
          </div>
          <div className="category-box">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop" alt="Men's Fashion" />
            </div>
            <div className="category-content">
              <h3>Men's</h3>
              <p>Shirts & Tops</p>
            </div>
          </div>
          <div className="category-box">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=200&fit=crop" alt="Women's Fashion" />
            </div>
            <div className="category-content">
              <h3>Women's</h3>
              <p>Dresses & More</p>
            </div>
          </div>
          <div className="category-box">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=200&fit=crop" alt="Children's Fashion" />
            </div>
            <div className="category-content">
              <h3>Children's</h3>
              <p>Kids Collection</p>
            </div>
          </div>
          <div className="category-box">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop" alt="Accessories" />
            </div>
            <div className="category-content">
              <h3>Accessories</h3>
              <p>Bags & More</p>
            </div>
          </div>
          <div className="category-box">
            <div className="category-image">
              <img src="https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=200&fit=crop" alt="New Arrivals" />
            </div>
            <div className="category-content">
              <h3>New Arrivals</h3>
              <p>Latest Styles</p>
            </div>
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

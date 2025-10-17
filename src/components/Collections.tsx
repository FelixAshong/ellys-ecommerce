import React from 'react';
import './Collections.css';

const Collections: React.FC = () => {
  return (
    <section className="collections">
      <div className="container">
        <div className="collections-grid">
          <div className="collection-card featured">
            <div className="collection-image">
              <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop" alt="Women's Collection" />
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <div className="collection-badge">Women's Collections</div>
              <h3 className="collection-title">Long Sleeve T-Shirt</h3>
              <button className="btn btn-primary">Explore Now <span className="btn-icon">â†—</span></button>
            </div>
          </div>
          
          <div className="collections-row">
            <div className="collection-card">
              <div className="collection-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop" alt="Men's Collection" />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-content">
                <div className="collection-badge">Men's Collections</div>
                <h3 className="collection-title">Half Sleeve Shirt</h3>
                <button className="btn btn-secondary">Explore Now <span className="btn-icon">â†—</span></button>
              </div>
            </div>
            
            <div className="collection-card">
              <div className="collection-image">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop" alt="T-Shirt Collection" />
                <div className="collection-overlay"></div>
              </div>
              <div className="collection-content">
                <div className="collection-badge">T-Shirt Collections</div>
                <h3 className="collection-title">Polo T-Shirt</h3>
                <button className="btn btn-secondary">Explore Now <span className="btn-icon">â†—</span></button>
              </div>
            </div>
          </div>
          
          <div className="collection-card wide">
            <div className="collection-image">
              <img src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500&h=400&fit=crop" alt="Denim Collection" />
              <div className="collection-overlay"></div>
            </div>
            <div className="collection-content">
              <div className="collection-badge">Denim Collections</div>
              <h3 className="collection-title">Denim-Jacket</h3>
              <button className="btn btn-secondary">Explore Now <span className="btn-icon">â†—</span></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;

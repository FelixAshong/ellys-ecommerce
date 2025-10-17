import React from 'react';
import './BrandLogos.css';

// Import brand logo images
import brand1 from '../assets/brands/image.png';
import brand2 from '../assets/brands/image (1).png';
import brand3 from '../assets/brands/image (2).png';
import brand4 from '../assets/brands/image (3).png';
import brand5 from '../assets/brands/image (4).png';
import brand6 from '../assets/brands/image 13.png';

const BrandLogos: React.FC = () => {
  const brands = [
    { name: 'Brand 1', logo: brand1 },
    { name: 'Brand 2', logo: brand2 },
    { name: 'Brand 3', logo: brand3 },
    { name: 'Brand 4', logo: brand4 },
    { name: 'Brand 5', logo: brand5 },
    { name: 'Brand 6', logo: brand6 }
  ];

  return (
    <section className="brand-logos">
      <div className="container">
        <div className="brands-content">
          <h3 className="brands-title">Shop by Brand</h3>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="brand-logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;

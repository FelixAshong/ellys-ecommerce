import React, { useState } from 'react';
import './TrendingProducts.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ChevronLeftIcon = FaChevronLeft as any;
const ChevronRightIcon = FaChevronRight as any;

interface TrendingProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  brand: string;
}

const TrendingProducts: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingProducts: TrendingProduct[] = [
    {
      id: 1,
      name: "ELLY's House Classic Sneakers in white and green",
      price: "$151.00",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 2,
      name: "ELLY's House Sport Sneakers in dark green and cream",
      price: "$143.00",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 3,
      name: "ELLY's House Running Shoes in white and green",
      price: "$174.00",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 4,
      name: "ELLY's House Premium Sneakers in white",
      price: "$237.00",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trendingProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trendingProducts.length) % trendingProducts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="trending-products-section">
      <div className="container">
        <div className="trending-header">
          <h2 className="trending-title">Trending Footwear</h2>
          <div className="trending-controls">
            <button className="control-btn" onClick={prevSlide}>
              <ChevronLeftIcon />
            </button>
            <button className="control-btn" onClick={nextSlide}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="trending-container">
          <div 
            className="trending-track"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {trendingProducts.map((product) => (
              <div key={product.id} className="trending-card">
                <div className="trending-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="trending-info">
                  <h3 className="trending-name">{product.name}</h3>
                  <div className="trending-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trending-dots">
          {trendingProducts.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="trending-cta">
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

import React, { useState } from 'react';
import './ProductCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ChevronLeftIcon = FaChevronLeft as any;
const ChevronRightIcon = FaChevronRight as any;

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  brand?: string;
}

const ProductCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products: Product[] = [
    {
      id: 1,
      name: "ELLY's House oversized hooded puffer jacket in grey",
      price: "$125.00",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 2,
      name: "ELLY's House relaxed tech trousers with drawstring waist in black",
      price: "$143.00",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 3,
      name: "ELLY's House relaxed long sleeve knitted crew neck t-shirt in grey marl",
      price: "$38.00",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    },
    {
      id: 4,
      name: "ELLY's House heavyweight oversized t-shirt in white",
      price: "$31.00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      brand: "ELLY's House"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="product-carousel-section">
      <div className="container">
        <div className="carousel-header">
          <h2 className="carousel-title">Essentials Refined</h2>
          <div className="carousel-controls">
            <button className="control-btn" onClick={prevSlide}>
              <ChevronLeftIcon />
            </button>
            <button className="control-btn" onClick={nextSlide}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        <div className="carousel-container">
          <div 
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 25}%)` }}
          >
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>

        <div className="carousel-cta">
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;

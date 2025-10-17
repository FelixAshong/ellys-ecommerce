import React from 'react';
import './RecommendedProducts.css';
import { FaStar, FaStarHalfAlt, FaArrowRight } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const StarIcon = FaStar as any;
const StarHalfIcon = FaStarHalfAlt as any;
const ArrowRightIcon = FaArrowRight as any;

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: string;
  discount: string;
}

const RecommendedProducts: React.FC = () => {
  const products: Product[] = [
    { id: 1, name: "Men's Polo T-shirt", price: "$25.3", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop", rating: "5.0", discount: "15% OFF" },
    { id: 2, name: "Women's Shirt", price: "$32.5", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop", rating: "5.0", discount: "10% OFF" },
    { id: 3, name: "Women's T-shirt", price: "$34.5", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop", rating: "5.0", discount: "15% OFF" },
    { id: 4, name: "Men's Hoodie", price: "$34.5", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop", rating: "5.0", discount: "10% OFF" },
    { id: 5, name: "Women's T-shirt", price: "$34.5", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop", rating: "5.0", discount: "15% OFF" },
    { id: 6, name: "Men's Hoodie", price: "$34.5", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop", rating: "4.5", discount: "10% OFF" },
    { id: 7, name: "Women's Top", price: "$32.5", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop", rating: "5.0", discount: "10% OFF" },
    { id: 8, name: "Men's Polo T-shirt", price: "$25.3", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop", rating: "4.5", discount: "15% OFF" }
  ];

  const renderStars = (rating: string) => {
    const numRating = parseFloat(rating);
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(numRating)) {
        return <StarIcon key={i} className="star filled" />;
      } else if (i === Math.floor(numRating) && numRating % 1 !== 0) {
        return <StarHalfIcon key={i} className="star half" />;
      } else {
        return <StarIcon key={i} className="star empty" />;
      }
    });
  };

  return (
    <section className="recommended-products">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Recommended For You</h2>
            <p>Style, inspired by the future of fashion</p>
          </div>
          <button className="btn btn-secondary">See More <ArrowRightIcon className="btn-icon" /></button>
        </div>
        
        <div className="recommended-grid">
          <div className="recommended-row">
            {products.slice(0, 4).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">{product.discount}</div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="rating-number">({product.rating})</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="recommended-row">
            {products.slice(4, 8).map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="product-badge">{product.discount}</div>
                </div>
                <div className="product-info">
                  <div className="product-rating">
                    {renderStars(product.rating)}
                    <span className="rating-number">({product.rating})</span>
                  </div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
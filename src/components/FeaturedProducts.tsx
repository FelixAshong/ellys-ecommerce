import React from 'react';
import './FeaturedProducts.css';
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
  badge?: string;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "ELLY's House oversized hooded puffer jacket in grey",
      price: "$125.00",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
      rating: "4.5",
      badge: "New"
    },
    {
      id: 2,
      name: "ELLY's House relaxed tech trousers with drawstring waist in black",
      price: "$143.00",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
      rating: "4.5",
      badge: "New"
    },
    {
      id: 3,
      name: "ELLY's House relaxed long sleeve knitted crew neck t-shirt in grey marl",
      price: "$38.00",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop",
      rating: "5.0"
    },
    {
      id: 4,
      name: "ELLY's House heavyweight oversized t-shirt in white",
      price: "$31.00",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      rating: "5.0"
    }
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
    <section className="featured-products">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Showcase style, inspired by the future of fashion</p>
          </div>
          <button className="btn btn-secondary">See More <ArrowRightIcon className="btn-icon" /></button>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && <div className="product-badge">{product.badge}</div>}
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
    </section>
  );
};

export default FeaturedProducts;
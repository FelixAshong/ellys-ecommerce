import React from 'react';
import './CategoryGrid.css';
import { FaArrowRight } from 'react-icons/fa';

const ArrowRightIcon = FaArrowRight as any;

const CategoryGrid: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: "The latest drops",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Fresh arrivals"
    },
    {
      id: 2,
      title: "Men's Essentials",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      description: "Classic styles"
    },
    {
      id: 3,
      title: "Women's Collection",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      description: "Trendy pieces"
    },
    {
      id: 4,
      title: "Street Essentials",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=400&fit=crop",
      description: "Urban style"
    },
    {
      id: 5,
      title: "Kids Collection",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop",
      description: "Fun & comfortable"
    },
    {
      id: 6,
      title: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=400&fit=crop",
      description: "Complete your look"
    }
  ];

  return (
    <section className="category-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New in</h2>
          <button className="view-all-btn">
            View All <ArrowRightIcon className="btn-icon" />
          </button>
        </div>
        
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.title} />
                <div className="category-overlay">
                  <button className="category-btn">Shop Now</button>
                </div>
              </div>
              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;

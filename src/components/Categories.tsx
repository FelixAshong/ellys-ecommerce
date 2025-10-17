import React from 'react';
import './Categories.css';

interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: "Men's Collection",
      description: "Trendy and comfortable clothing for men of all ages",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      link: "/mens"
    },
    {
      id: 2,
      name: "Women's Collection",
      description: "Elegant and fashionable clothing for women",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      link: "/womens"
    },
    {
      id: 3,
      name: "Children's Collection",
      description: "Fun and comfortable clothing for kids",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop",
      link: "/childrens"
    }
  ];

  return (
    <section className="categories">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>Shop by Category</h2>
            <p>Find the perfect outfit for every occasion</p>
          </div>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <a href={category.link} className="category-link">
                    Shop {category.name}
                  </a>
                </div>
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

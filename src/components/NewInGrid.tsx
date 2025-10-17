import React from 'react';
import './NewInGrid.css';

const NewInGrid: React.FC = () => {
  const newInItems = [
    {
      id: 1,
      title: "The latest drops",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "Fresh arrivals"
    },
    {
      id: 2,
      title: "Weekday",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
      description: "Casual essentials"
    },
    {
      id: 3,
      title: "New-season knits",
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop",
      description: "Cozy sweaters"
    },
    {
      id: 4,
      title: "Street essentials",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300&h=300&fit=crop",
      description: "Urban style"
    },
    {
      id: 5,
      title: "ELLY's House",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
      description: "Our signature line"
    },
    {
      id: 6,
      title: "Grooming",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      description: "Personal care"
    }
  ];

  return (
    <section className="new-in-section">
      <div className="container">
        <h2 className="section-title">New in</h2>
        <div className="new-in-grid">
          {newInItems.map((item) => (
            <div key={item.id} className="new-in-tile">
              <div className="tile-image">
                <img src={item.image} alt={item.title} />
                <div className="tile-overlay">
                  <div className="tile-content">
                    <h3 className="tile-title">{item.title}</h3>
                    <p className="tile-description">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewInGrid;

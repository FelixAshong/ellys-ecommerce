import React from 'react';
import './WhyChooseUs.css';
import { FaArrowRight } from 'react-icons/fa';

// Import custom icons
import icon1 from '../assets/Why Choose/Frame 55.png';
import icon2 from '../assets/Why Choose/Frame 55 (1).png';
import icon3 from '../assets/Why Choose/Frame 55 (2).png';
import icon4 from '../assets/Why Choose/Frame 55 (3).png';

// Type assertion to fix TypeScript issues with react-icons
const ArrowRightIcon = FaArrowRight as any;

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  iconImage: string;
}

const WhyChooseUs: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: "Quality Fashion",
      description: "We carefully curate our collections to ensure every piece meets our high standards for quality and style.",
      icon: "cut",
      iconImage: icon1
    },
    {
      id: 2,
      title: "Affordable Prices",
      description: "We believe everyone deserves access to great fashion at prices that won't break the bank.",
      icon: "lightbulb",
      iconImage: icon2
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We're committed to providing exceptional service and support.",
      icon: "star",
      iconImage: icon3
    },
    {
      id: 4,
      title: "Family Focused",
      description: "From men's and women's clothing to children's wear, we have something for every member of your family.",
      icon: "leaf",
      iconImage: icon4
    }
  ];

  const renderIcon = (feature: Feature) => {
    return <img src={feature.iconImage} alt={feature.title} className="feature-icon-image" />;
  };

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <div className="section-title">
              <h2>Why Choose ELLY's House</h2>
              <p>Your Trusted Fashion Partner</p>
            </div>
            <button className="btn btn-secondary">Learn More <ArrowRightIcon className="btn-icon" /></button>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon">
                  <div className="icon-circle">
                    {renderIcon(feature)}
                  </div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

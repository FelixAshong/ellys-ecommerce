import React from 'react';
import './About.css';
import { FaUsers, FaHeart, FaShieldAlt, FaTruck } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const UsersIcon = FaUsers as any;
const HeartIcon = FaHeart as any;
const ShieldIcon = FaShieldAlt as any;
const TruckIcon = FaTruck as any;

const About: React.FC = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "5K+", label: "Products Sold" },
    { number: "3", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const values = [
    {
      icon: <UsersIcon />,
      title: "Customer First",
      description: "We prioritize our customers' needs and satisfaction above all else, ensuring every shopping experience is exceptional."
    },
    {
      icon: <HeartIcon />,
      title: "Quality Fashion",
      description: "We curate only the finest clothing items, ensuring style, comfort, and durability in every piece we offer."
    },
    {
      icon: <ShieldIcon />,
      title: "Trust & Reliability",
      description: "Your trust is our foundation. We maintain the highest standards in product quality and customer service."
    },
    {
      icon: <TruckIcon />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your favorite pieces to you as soon as possible."
    }
  ];

  return (
    <section className="about">
      <div className="container">
        <div className="about-hero">
          <div className="about-content">
            <div className="about-text">
              <h1>About ELLY's House</h1>
              <p className="about-subtitle">Your Fashion Destination Since 2021</p>
              <p className="about-description">
                At ELLY's House, we believe that fashion is more than just clothing – it's a way to express your unique personality and style. 
                Founded in 2021, we've been dedicated to providing high-quality, trendy clothing for men, women, and children at affordable prices.
              </p>
              <p className="about-description">
                Our mission is to make fashion accessible to everyone, offering a wide range of styles from casual everyday wear to elegant formal attire. 
                We carefully curate our collections to ensure that every piece meets our high standards for quality, comfort, and style.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop" alt="ELLY's House Store" />
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="values-section">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>What drives us to provide the best fashion experience</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  {value.icon}
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="story-section">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                ELLY's House was born from a simple idea: everyone deserves access to quality, fashionable clothing at reasonable prices. 
                Our founder, Elly, started this journey with a small collection of carefully selected pieces and a big dream.
              </p>
              <p>
                Today, we've grown into a trusted fashion destination serving thousands of customers worldwide. 
                We continue to expand our collections while maintaining our commitment to quality, affordability, and exceptional customer service.
              </p>
              <p>
                Whether you're looking for the perfect outfit for a special occasion or everyday essentials, 
                ELLY's House has something for everyone in the family.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop" alt="Our Story" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

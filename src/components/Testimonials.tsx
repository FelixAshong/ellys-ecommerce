import React from 'react';
import './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import review quote icon
import reviewIcon from '../assets/review.png';

// Type assertion to fix TypeScript issues with react-icons
const ChevronLeftIcon = FaChevronLeft as any;
const ChevronRightIcon = FaChevronRight as any;

interface Testimonial {
  id: number;
  text: string;
  author: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "The quality of these clothes is unmatched. Every piece I've bought is not only beautiful but feels incredible to wear. Plus, knowing that they're made ethically makes me feel even better about my purchases.",
      author: "David L.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      text: "I've been searching for the perfect, sustainable clothing brand for years. Finally, I've discovered ELLY's House! Their commitment to quality and their dedication to customer satisfaction is truly inspiring. It's a brand I can trust!",
      author: "Mary J.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <h2>What Customers Saying</h2>
            <p>Reviews From People Who Love ELLY's House</p>
          </div>
          <div className="testimonial-controls">
            <button className="control-btn"><ChevronLeftIcon /></button>
            <button className="control-btn"><ChevronRightIcon /></button>
          </div>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <img src={reviewIcon} alt="Quote" className="quote-icon" />
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={testimonial.avatar} alt={testimonial.author} />
                </div>
                <span className="author-name">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PromotionalBanner from './components/PromotionalBanner';
import CategoryGrid from './components/CategoryGrid';
import Categories from './components/Categories';
import BrandLogos from './components/BrandLogos';
import FeaturedProducts from './components/FeaturedProducts';
import RecommendedProducts from './components/RecommendedProducts';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import About from './components/About';
import Store from './components/Store';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'store':
        return <Store />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <PromotionalBanner />
            <CategoryGrid />
            <Categories />
            <BrandLogos />
            <FeaturedProducts />
            <RecommendedProducts />
            <WhyChooseUs />
            <Testimonials />
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
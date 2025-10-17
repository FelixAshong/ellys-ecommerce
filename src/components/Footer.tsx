import React from 'react';
import './Footer.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaLinkedin } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const MapIcon = FaMapMarkerAlt as any;
const PhoneIcon = FaPhone as any;
const EmailIcon = FaEnvelope as any;
const FacebookIcon = FaFacebook as any;
const InstagramIcon = FaInstagram as any;
const TwitterIcon = FaTwitter as any;
const PinterestIcon = FaPinterest as any;
const LinkedinIcon = FaLinkedin as any;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">ELLY's House</h3>
            <p>Your trusted fashion destination for men's, women's, and children's clothing. Quality, style, and affordability in every piece.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>About Us</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Shipping & Returns</a></li>
                <li><a href="#">Size Guide</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><a href="#">Men's Clothing</a></li>
                <li><a href="#">Women's Clothing</a></li>
                <li><a href="#">Children's Clothing</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Sale</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon"><MapIcon /></span>
                  <span>123 Fashion St., Suite 456<br />City, State, ZIP Code</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><PhoneIcon /></span>
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon"><EmailIcon /></span>
                  <span>support@fancy.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2024 ELLY's House. All rights reserved.</span>
          </div>
          <div className="social-links">
            <a href="#" className="social-link"><FacebookIcon /></a>
            <a href="#" className="social-link"><InstagramIcon /></a>
            <a href="#" className="social-link"><TwitterIcon /></a>
            <a href="#" className="social-link"><PinterestIcon /></a>
            <a href="#" className="social-link"><LinkedinIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
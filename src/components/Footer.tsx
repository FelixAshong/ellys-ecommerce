import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaSnapchat } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const FacebookIcon = FaFacebook as any;
const InstagramIcon = FaInstagram as any;
const SnapchatIcon = FaSnapchat as any;

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top Section - Social Media & Payment Methods */}
        <div className="footer-top">
          <div className="social-payment">
            <div className="social-media">
              <a href="https://facebook.com" className="social-link facebook">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" className="social-link instagram">
                <InstagramIcon />
              </a>
              <a href="https://snapchat.com" className="social-link snapchat">
                <SnapchatIcon />
              </a>
            </div>
            <div className="payment-methods">
              <div className="payment-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" />
              </div>
              <div className="payment-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" />
              </div>
              <div className="payment-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" alt="PayPal" />
              </div>
              <div className="payment-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/1280px-American_Express_logo.svg.png" alt="American Express" />
              </div>
              <div className="payment-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa Electron" />
                <span className="electron-text">ELECTRON</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-column">
            <h4>HELP & INFORMATION</h4>
            <ul>
              <li><a href="/help">Help</a></li>
              <li><a href="/track-order">Track order</a></li>
              <li><a href="/delivery-returns">Delivery & returns</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>ABOUT ELLY'S HOUSE</h4>
            <ul>
              <li><a href="/about">About us</a></li>
              <li><a href="/careers">Careers at ELLY's House</a></li>
              <li><a href="/corporate-responsibility">Corporate responsibility</a></li>
              <li><a href="/investors">Investors' site</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>MORE FROM ELLY'S HOUSE</h4>
            <ul>
              <li><a href="/mobile-apps">Mobile and ELLY's House apps</a></li>
              <li><a href="/gift-vouchers">Gift vouchers</a></li>
              <li><a href="/black-friday">Black Friday</a></li>
              <li><a href="/thrift-plus">ELLY's House x Thrift+</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>SHOPPING FROM:</h4>
            <div className="shopping-info">
              <div className="current-region">
                <span>You're in</span>
                <div className="flag-container">
                  <div className="flag ghana-flag"></div>
                  <span>CHANGE</span>
                </div>
              </div>
              <div className="international-sites">
                <p>Some of our international sites:</p>
                <div className="country-flags">
                  <div className="flag spain-flag"></div>
                  <div className="flag germany-flag"></div>
                  <div className="flag australia-flag"></div>
                  <div className="flag france-flag"></div>
                  <div className="flag denmark-flag"></div>
                  <div className="flag italy-flag"></div>
                  <div className="flag netherlands-flag"></div>
                  <div className="flag poland-flag"></div>
                  <div className="flag usa-flag"></div>
                  <div className="flag sweden-flag"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>© 2025 ELLY's House</span>
          </div>
          <div className="footer-legal">
            <a href="/privacy">Privacy & Cookies</a>
            <span>|</span>
            <a href="/terms">Ts&Cs</a>
            <span>|</span>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

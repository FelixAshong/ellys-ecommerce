import React, { useState } from 'react';
import './Store.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaShoppingCart, FaHeart } from 'react-icons/fa';

// Type assertion to fix TypeScript issues with react-icons
const MapIcon = FaMapMarkerAlt as any;
const PhoneIcon = FaPhone as any;
const EmailIcon = FaEnvelope as any;
const ClockIcon = FaClock as any;
const CartIcon = FaShoppingCart as any;
const HeartIcon = FaHeart as any;

interface StoreProduct {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  size: string[];
  description: string;
  inStock: boolean;
}

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState<StoreProduct[]>([]);

  const products: StoreProduct[] = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
      category: "mens",
      size: ["S", "M", "L", "XL"],
      description: "Comfortable cotton t-shirt perfect for everyday wear",
      inStock: true
    },
    {
      id: 2,
      name: "Elegant Summer Dress",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=400&fit=crop",
      category: "womens",
      size: ["XS", "S", "M", "L"],
      description: "Beautiful floral dress for special occasions",
      inStock: true
    },
    {
      id: 3,
      name: "Kids Adventure Jacket",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=400&fit=crop",
      category: "childrens",
      size: ["4", "6", "8", "10", "12"],
      description: "Durable jacket for active kids",
      inStock: true
    },
    {
      id: 4,
      name: "Business Casual Shirt",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      category: "mens",
      size: ["S", "M", "L", "XL", "XXL"],
      description: "Professional shirt for office wear",
      inStock: false
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product: StoreProduct) => {
    setCart(prev => [...prev, product]);
    alert(`${product.name} added to cart!`);
  };

  const toggleWishlist = (product: StoreProduct) => {
    alert(`${product.name} added to wishlist!`);
  };

  return (
    <section className="store">
      <div className="container">
        <div className="section-header">
          <h2>ELLY's House Store</h2>
          <p>Discover our latest collection of fashionable clothing for men, women, and children</p>
        </div>

        <div className="store-content">
          <div className="store-sidebar">
            <div className="store-info">
              <h3>Visit Our Store</h3>
              <div className="info-item">
                <MapIcon />
                <div>
                  <strong>Address</strong>
                  <p>123 Fashion Street<br />New York, NY 10001</p>
                </div>
              </div>
              <div className="info-item">
                <PhoneIcon />
                <div>
                  <strong>Phone</strong>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="info-item">
                <EmailIcon />
                <div>
                  <strong>Email</strong>
                  <p>store@ellyshouse.com</p>
                </div>
              </div>
              <div className="info-item">
                <ClockIcon />
                <div>
                  <strong>Hours</strong>
                  <p>Mon-Fri: 9AM-8PM<br />Sat-Sun: 10AM-6PM</p>
                </div>
              </div>
            </div>

            <div className="category-filter">
              <h3>Categories</h3>
              <button 
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                All Products
              </button>
              <button 
                className={selectedCategory === 'mens' ? 'active' : ''}
                onClick={() => setSelectedCategory('mens')}
              >
                Men's Clothing
              </button>
              <button 
                className={selectedCategory === 'womens' ? 'active' : ''}
                onClick={() => setSelectedCategory('womens')}
              >
                Women's Clothing
              </button>
              <button 
                className={selectedCategory === 'childrens' ? 'active' : ''}
                onClick={() => setSelectedCategory('childrens')}
              >
                Children's Clothing
              </button>
            </div>
          </div>

          <div className="store-products">
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {!product.inStock && <div className="out-of-stock">Out of Stock</div>}
                    <div className="product-actions">
                      <button 
                        className="action-btn wishlist"
                        onClick={() => toggleWishlist(product)}
                        title="Add to Wishlist"
                      >
                        <HeartIcon />
                      </button>
                      <button 
                        className="action-btn cart"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        title="Add to Cart"
                      >
                        <CartIcon />
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-sizes">
                      <span>Sizes: </span>
                      {product.size.map((size, index) => (
                        <span key={index} className="size-tag">{size}</span>
                      ))}
                    </div>
                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                      {product.originalPrice && (
                        <span className="original-price">${product.originalPrice}</span>
                      )}
                    </div>
                    <button 
                      className="btn btn-primary add-to-cart"
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Navbar from './components/navbar';
import MiniCart from './components/minicart';
import Footer from './components/footer';
import Home from './components/home';
import Register from './pages/register';  
import Profile from './pages/profile';   
import Login from './pages/login';  
import { CartProvider } from './context/CartContext';
import './index.css';

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleToggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />
          <Header onCartClick={handleToggleCart} />
          <MiniCart onClose={() => setIsCartOpen(false)} isOpen={isCartOpen} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />  
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;

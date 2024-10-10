import React from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Card from './components/card';
import Footer from './components/footer';
import Home from './components/home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Card />
      <Footer />
      <Home />
    </div>
  );
}

export default App;

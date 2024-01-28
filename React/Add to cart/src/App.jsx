import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Contact from './pages/Contact'
import CarsList from './pages/CarsList'
import Terms from './pages/Terms'
import Car from './pages/Car'
import About from './pages/About'
import Checkout from './pages/Checkout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cars" element={<CarsList />} />
      <Route path="Terms" element={<Terms />} />
      <Route path="Car" element={<Car />} />
      <Route path="About" element={<About />} />
      <Route path="Checkout" element={<Checkout />} />
    </Routes>
  </BrowserRouter>
   
  );
}

export default App;

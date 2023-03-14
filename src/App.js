import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Heading';
import Container from './components/Container';
import Categories from './components/Category';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;

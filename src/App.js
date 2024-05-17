// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Actor from './pages/Actor'; // Importa el nuevo componente
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; // Importa el componente Navbar
import './App.css'; // Importa el archivo CSS global


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/actor/:id" element={<Actor />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

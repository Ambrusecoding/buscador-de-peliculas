// src/pages/Search.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import tmdb from '../api/tmdb';
import '../styles/Search.css'; // Importa el archivo CSS
import BotonVerMas from '../components/BotonVerMas/BotonVerMas';
import SearchForm from '../components/SearchForm/SearchForm';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await tmdb.get('/search/movie', {
      params: { query },
    });
    setResults(response.data.results);
  };

  return (
    <div className="container mt-3">
      <h1>Buscador de peliculas</h1>
      <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <ul className="movie-list">
        {results.map((movie) => (
          <li key={movie.id} className="movie-item">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="movie-image"
            />
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <Link to={`/movie/${movie.id}`}>
              <BotonVerMas texto="Ver más" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;

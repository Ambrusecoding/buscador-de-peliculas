
import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';
import '../styles/Home.css'; 
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await tmdb.get('/movie/popular');
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching the popular movies:", error);
      }
    };
    fetchMovies();
  }, []);



  return (
    <div className="container mt-3">
      <div className="row">
      <div className="container mt-3 mb-4">
      <h1>Peliculas mas populares</h1>
        </div>
        {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;

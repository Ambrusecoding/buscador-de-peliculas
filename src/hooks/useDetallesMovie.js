import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching the movie:", error);
      }
    };

    const fetchCast = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching the cast:", error);
      }
    };

    const fetchTrailer = async () => {
      try {
        const response = await tmdb.get(`/movie/${id}/videos`);
        const trailer = response.data.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching the trailer:", error);
      }
    };

    fetchMovie();
    fetchCast();
    fetchTrailer();
  }, [id]);

  return { movie, cast, trailerKey };
};

export default useMovieDetails;

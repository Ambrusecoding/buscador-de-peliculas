import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import tmdb from '../api/tmdb';

const Actor = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorAndMovies = async () => {
      try {
        // Obtener información del actor
        const responseActor = await tmdb.get(`/person/${id}`);
        setActor(responseActor.data);

        // Obtener películas en las que aparece el actor
        const responseMovies = await tmdb.get(`/person/${id}/movie_credits`);
        setMovies(responseMovies.data.cast);
      } catch (error) {
        console.error('Error al obtener la información del actor y las películas:', error);
      }
    };

    fetchActorAndMovies();
  }, [id]);

  if (!actor) return <div>Loading...</div>;

  return (
    <div className="container mt-3">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1 className="text-center">{actor.name}</h1>
          <p>{actor.biography}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className='mt-4 mb-4'>Apariciones</h3>
          <div className="row">
            {movies.map((movie) => (
              <div
                style={{ cursor: "pointer" }}
                className="col-md-3 mb-4"
                key={movie.id}
              >
                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid rounded movie-img"
                  />
                  <h4 className="text-center mt-4">{movie.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;

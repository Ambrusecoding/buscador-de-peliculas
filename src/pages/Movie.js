import { Link, useParams } from 'react-router-dom';
import useMovieDetails from '../hooks/useDetallesMovie';

const Movie = () => {
  const { id } = useParams();
  const { movie, cast, trailerKey } = useMovieDetails(id);

  return (
    <div className="container mt-3">
      {movie && (
        <div className="row">
          <div className="col-md-4 mb-4">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-8 mb-4 d-flex align-items-center">
            <div>
              <h1>{movie.title}</h1>
              <p><strong>Calificación:</strong> {movie.vote_average}</p>
              <p><strong>Géneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
              <h2>Descripción</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="col-md-12">
            {trailerKey && (
              <iframe
                title="trailer"
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${trailerKey}`}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="col-md-12 mt-4">
            <h2 className="mb-4">Cast</h2>
            <div className="row">
              {cast.map((actor) => (
                <div
                  style={{ cursor: 'pointer' }}
                  className="col-md-3 mb-4"
                  key={actor.id}
                >
                  <Link to={`/actor/${actor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                      alt={actor.name}
                      className="img-fluid rounded"
                    />
                  </Link>
                  <Link to={`/actor/${actor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h4 className="text-center mt-4">{actor.name}</h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movie;

import { Link } from "react-router-dom";
import "../styles/Home.css";

const MovieCard = ({ movie }) => {
  return (
    <div style={{ cursor: "pointer" }} className="col-md-4 mb-4" key={movie.id}>
      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="img-fluid rounded movie-img"
        />
        <h4 className="text-center mt-4">{movie.title}</h4>
      </Link>
    </div>
  );
};

export default MovieCard;

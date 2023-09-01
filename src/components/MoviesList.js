import React from "react";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  return (
    <div>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {/* Generate a link to the individual movie page */}
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;

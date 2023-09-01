import React from "react";
import { useParams } from "react-router-dom";


function MovieShow({ movies }) {
  const { movieId } = useParams();

  // Find the movie with the specified ID
  const movie = movies.find((movie) => movie.id === parseInt(movieId));

  // If the movie is not found, display an error message
  if (!movie) {
    return (
      <div>
        <h3>Movie not found</h3>
      </div>
    );
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      {/* Render other movie details here */}
    </div>
  );
}

export default MovieShow;

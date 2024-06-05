import React from 'react';
// would be props.movie but movie would be more efficient as long as you call movie everywhere
const MovieCard = ({ movie }) => {
    return (
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    );
}

export default MovieCard

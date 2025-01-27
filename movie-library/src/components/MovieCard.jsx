import React from 'react';

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

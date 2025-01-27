import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '8b1831a3371c1df168bc81fed7c61a98', // Replace with your TMDb API Key
          language: 'en-US',
          page: 1,
        },
      });
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Library</h1>
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

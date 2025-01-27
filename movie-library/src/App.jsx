import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '8b1831a3371c1df168bc81fed7c61a98', // Replace with your TMDb API Key
          language: 'en-US',
          query: searchQuery,
          page: 1,
        },
      });
      setMovies(response.data.results);
    };

    if (searchQuery) {
      fetchMovies();
    }
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Library</h1>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;

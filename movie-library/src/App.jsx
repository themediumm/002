import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tempQuery, setTempQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      let url = 'https://api.themoviedb.org/3/movie/top_rated';
      let params = {
        api_key: '8b1831a3371c1df168bc81fed7c61a98', // Replace with your TMDb API Key
        language: 'en-US',
        page: 1,
      };

      if (searchQuery) {
        url = 'https://api.themoviedb.org/3/search/movie';
        params.query = searchQuery;
      }

      const response = await axios.get(url, { params });
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setTempQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(tempQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Library</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies..."
            value={tempQuery}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearchSubmit}>Search</button>
        </div>
      </header>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
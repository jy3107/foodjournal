import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


// api key 70a8b4b7
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=70a8b4b7";


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`)
      const data = await response.json();

      setMovies(data.Search);
    }

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input 
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        <img 
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}/>
      </div>

      {movies?.length > 0
        ? (
          <div className='container'>
          {/* basically goes over array of all movies */}
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
          )}
    </div>
  );
}

export default App;


  // // [name of state, val of state]
  // const [counter, setCounter] = useState(0);

  // // happens when this component App renders (ex. reloading page)
  // useEffect(() => {
  //   setCounter(100)
  // }, []) // adding empty bracket (dependency array) ensures effect code will only occur at initial load

  // return (
  //   <div className="App">
  //     <button onClick={() => setCounter((prevCount) => prevCount + 1)}>
  //       +
  //     </button>
  //     <h1>{counter}</h1>
  //     <button onClick={() => setCounter((prevCount) => prevCount - 1)}>
  //       -
  //     </button>
  //   </div>
  // );
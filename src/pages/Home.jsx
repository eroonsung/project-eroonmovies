import { useEffect, useState } from "react";
import SearchIcon from "../search.svg";
import MovieCard from "../components/MovieCard";
// import { useLocation } from "react-router-dom";

//OMDB API KEY : 77e5ebb0
const API_URL = "http://www.omdbapi.com?apikey=77e5ebb0";

// const movie1 = {
//   Title: "About Time",
//   Year: "2013",
//   imdbID: "tt2194499",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_SX300.jpg",
//   // "Poster": "N/A"
// };

const Home = () => {
  // const location = useLocation();
  // const searchTerm = location.state.searchTerm;
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // console.log(data.Search);
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Home");
  }, []);

  return (
    <div className="app">
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" ? searchMovies(searchTerm) : <></>;
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;

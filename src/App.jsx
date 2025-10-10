import React, { useEffect, useState } from "react"
import heroImg from "./assets/hero.png"
import Search from "./components/Search.jsx"

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const API_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = `${API_BASE_URL}s=avengers`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (data.Response === "False") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.Search || []);
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src={heroImg} alt="Hero Banner" />
          <h1>Find <span className="text-gradient">movies</span> you'll enjoy without the hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All movies</h2>
          {isLoading ? (
            <p className="text-white">Loading...</p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p className="text-white">{movie.Title}</p>
              ))}
            </ul>
          )}
        </section>
      </div>

    </main>
  )
}

export default App

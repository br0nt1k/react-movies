import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import { fetchMovies } from "../../services/movieService";
import { Movie } from "../../types/movie";
import toast from "react-hot-toast";
import MovieGrid from "../MovieGrid/MovieGrid";
import MovieModal from "../MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie) => setSelectedMovie(movie);

  const closeModal = () => setSelectedMovie(null);

  const handleSearch = async (topic: string) => {
    try {
      setIsError(false);
      setMovies([]);
      setIsLoading(true);
      const newMovies = await fetchMovies(topic);
      setMovies(newMovies.results);
      if (newMovies.results.length === 0) {
        return toast.error("No movies found for your request.");
      }
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {movies.length > 0 && (
        <MovieGrid movies={movies} onSelect={handleSelectMovie} />
      )}
      <Toaster position="top-center" />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {selectedMovie !== null && (
        <MovieModal movie={selectedMovie} onClose={closeModal} />
      )}
    </>
  );
}

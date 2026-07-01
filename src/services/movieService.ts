import axios from "axios";
import { Movie } from "../types/movie";

interface FetchMoviesResp {
  results: Movie[];
}

export const axiosConfig = {
  url: "https://api.themoviedb.org/3/search/movie",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const fetchMovies = async (newQuery: string) => {
  const res = await axios.get<FetchMoviesResp>(
    `${axiosConfig.url}?query=${newQuery}`,
    axiosConfig,
  );
  return res.data;
};

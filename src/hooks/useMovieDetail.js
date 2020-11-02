import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/MoviesPopular/moviesSlice";
import { fetchGenre, selectGenre } from "../features/genres/genresSlice";
import { useQueryParameter } from "./queryParameters";
import { PAGE_PARAMETER, QUERY_PARAMETER } from "../lib/consts";

export const useMovieDetail = () => {
  const dispatch = useDispatch();
  const genresResult = useSelector(selectGenre);
  const query = useQueryParameter(QUERY_PARAMETER);
  const page = useQueryParameter(PAGE_PARAMETER);

  useEffect(() => {
    if (!query || query === "") {
      dispatch(fetchMovies({page: "1"}));
    }
  }, [dispatch, query]);

  useEffect(() => {
    if (!query || query === "") {
      dispatch(fetchMovies({page}));
    }
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(fetchGenre());
  }, [dispatch]);

  const getMovieGenres = (genre_ids) => {
    const genres = [];

    genre_ids.forEach(ID => {
      const genreName = (genresResult.find((element) => element.id === ID)).name;
      genres.push(genreName);
    });

    return genres;
  };

  return getMovieGenres;
};
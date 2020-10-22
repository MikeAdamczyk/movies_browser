import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "./movies/MoviesPopular/moviesSlice";
import {fetchGenre, selectGenre} from "./genres/genresSlice";
import {useQueryParameter} from "./queryParameters";
import {PAGE_PARAMETER, QUERY_PARAMETER} from "../lib/consts";

export const useMovieDetail = () => {
    const dispatch = useDispatch();
    const genresResult = useSelector(selectGenre);
    const query = useQueryParameter(QUERY_PARAMETER);
    const page = useQueryParameter(PAGE_PARAMETER);

    useEffect(() => {
        if (!query || query === "") {
            dispatch(fetchMovies(page));
        }
    }, [dispatch, query, page]);

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
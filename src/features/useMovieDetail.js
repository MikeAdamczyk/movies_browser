import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, fetchFirstMoviePage} from "./movies/MoviesPopular/moviesSlice";
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
            dispatch(fetchFirstMoviePage({page:1}));
        }
    }, [dispatch, query]);

    useEffect(() => {
        if ((!query || query==="") && page !== 1) {
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
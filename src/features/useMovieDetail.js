import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectCurrentPage} from "./movies/moviesSlice";
import {fetchGenre, selectGenre} from "./genres/genresSlice";
import {useQueryParameter} from "./queryParameters";
import {QUERY_PARAMETER} from "../lib/consts";

export const useMovieDetail = () => {
    const dispatch = useDispatch();
    const genresResult = useSelector(selectGenre);
    const query = useQueryParameter(QUERY_PARAMETER);
    const page = useSelector(selectCurrentPage);

    useEffect(() => {
        if (!query || query === "") {
            dispatch(fetchMovies(page));
            dispatch(fetchGenre())
        }
        return;
    }, [dispatch, query, page]);

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
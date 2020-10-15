import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, getSearchedMovies} from "../features/movies/moviesSlice";
import {fetchGenre, selectGenre} from "../features/genres/genresSlice";
import {useQueryParameter} from "../queryParameters";
import {QUERY_PARAMETER} from "./consts";


export const useMovieDetail = () => {
    const dispatch = useDispatch();

    const query = useQueryParameter(QUERY_PARAMETER);
    const moviesResult = useSelector((state) => getSearchedMovies(state, query));
    const genresResult = useSelector(selectGenre);

    useEffect(() => {
        dispatch(fetchMovie());
        dispatch(fetchGenre())
    }, [dispatch])

    const getMovieGenres = (genre_ids) => {
        const genres = [];

        genre_ids.forEach(ID => {
            const genreName = (genresResult.find((element) => element.id === ID)).name;
            genres.push(genreName);
        });

        return genres;
    };

    const getProductionYear = (releaseDate) => {
        const productionYear = (new Date(releaseDate)).getFullYear();
        return productionYear;
    };

    return {getProductionYear, getMovieGenres, moviesResult}
};
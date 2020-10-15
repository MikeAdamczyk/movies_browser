import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "./moviesSlice";
import {fetchGenre, selectGenre} from "../genres/genresSlice";

export const useMovieDetail = () => {
    const dispatch = useDispatch();

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

    return getMovieGenres;
};
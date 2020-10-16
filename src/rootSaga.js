import {all} from "redux-saga/effects";
import {moviesSaga} from "./features/movies/moviesSaga";
import {genresSaga} from "./features/genres/genresSaga";
import {peopleSaga} from "./features/people/peopleSaga";
import {searchedMoviesSaga} from "./features/movies/searchedMoviesSaga";
import {searchedPeopleSaga} from "./features/people/searchedPeopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
        peopleSaga(),
        searchedMoviesSaga(),
        searchedPeopleSaga(),
    ]);
}
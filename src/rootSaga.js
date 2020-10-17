import {all} from "redux-saga/effects";
import {moviesSaga} from "./features/movies/moviesSaga";
import {genresSaga} from "./features/genres/genresSaga";
import {peopleSaga} from "./features/people/peopleSaga";
import {searchedMoviesSaga} from "./features/movies/searchedMoviesSaga";
import {searchedPeopleSaga} from "./features/people/searchedPeopleSaga";
import {changePageMoviesSaga} from "./features/movies/changePageMoviesSaga";
import {changePagePeopleSaga} from "./features/people/changePagePeopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
        peopleSaga(),
        searchedMoviesSaga(),
        searchedPeopleSaga(),
        changePageMoviesSaga(),
        changePagePeopleSaga(),
    ]);
}
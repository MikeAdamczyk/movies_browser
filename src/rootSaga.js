import {all} from "redux-saga/effects";
import {moviesSaga} from "./features/movies/moviesSaga";
import {genresSaga} from "./features/genres/genresSaga";
import {peopleSaga} from "./features/people/peopleSaga";
import {movieDetailSaga} from "./features/movies/MovieDetail/movieDetailSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
        peopleSaga(),
        movieDetailSaga(),
    ]);
}
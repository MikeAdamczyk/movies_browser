import {all} from "redux-saga/effects";
import {moviesSaga} from "./features/movies/moviesSaga";
import {genresSaga} from "./features/genres/genresSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga()
    ]);
}
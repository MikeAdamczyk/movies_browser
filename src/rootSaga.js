import {all} from "redux-saga/effects";
import {moviesSaga} from "./features/movies/MoviesPopular/moviesSaga";
import {genresSaga} from "./features/genres/genresSaga";
import {peopleSaga} from "./features/people/PeoplePopular/peopleSaga";
import {personDetailSaga} from "./features/people/PersonDetail/personDetailSaga";
import {personCreditsSaga} from "./features/people/PersonCredits/personCreditsSaga";
import {movieDetailSaga} from "./features/movies/MovieDetail/movieDetailSaga";
import {movieCreditsSaga} from "./features/movies/MovieCredits/movieCreditsSaga";


export default function* rootSaga() {
    yield all([
        moviesSaga(),
        genresSaga(),
        peopleSaga(),
        movieDetailSaga(),
        movieCreditsSaga(),
        personDetailSaga(),
        personCreditsSaga(),
    ]);
}
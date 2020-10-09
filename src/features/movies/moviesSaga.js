import {call, put, takeEvery, delay} from "redux-saga/effects";
import {getMovie} from "./getMovie";
import {fetchMovieSucces, fetchMovieError, fetchMovie} from "./moviesSlice";

function* fetchMovieHandler() {
    try {
        yield delay(1000)
        const movie = yield call(getMovie);
        yield put(fetchMovieSucces(movie))
    } catch (error) {
        yield put(fetchMovieError(error))
    }
}

export function* moviesSaga() {
    yield takeEvery(fetchMovie.type, fetchMovieHandler);
}
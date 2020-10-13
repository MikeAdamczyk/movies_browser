import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovie} from "./getMovie";
import {fetchMovieSuccess, fetchMovieError, fetchMovie} from "./moviesSlice";

function* fetchMovieHandler() {
    try {
        yield delay(1000)
        const movie = yield call(getMovie);
        yield put(fetchMovieSuccess(movie))
    } catch (error) {
        yield put(fetchMovieError(error))
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
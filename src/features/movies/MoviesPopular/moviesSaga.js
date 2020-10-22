import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovie} from "./getMovie";
import {fetchMoviesSuccess, fetchMoviesError, fetchMovies} from "./moviesSlice";

function* fetchMovieHandler(action) {
    try {
        yield delay(3000);
        const movie = yield call(getMovie, action.payload);
        yield put(fetchMoviesSuccess(movie))
    } catch (error) {
        yield put(fetchMoviesError(error))
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieHandler);
}
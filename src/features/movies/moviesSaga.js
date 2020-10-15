import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovie} from "./getMovie";
import {fetchMoviesSuccess, fetchMoviesError, fetchMovies} from "./moviesSlice";

function* fetchMovieHandler(action) {
    try {
        yield delay(1000)
        const movie = yield call(getMovie);
        yield put(fetchMoviesSuccess(movie,  action.payload))
    } catch (error) {
        yield put(fetchMoviesError(error))
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieHandler);
}
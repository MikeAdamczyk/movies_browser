import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovie} from "./getMovie";
import {fetchMoviesSuccess, fetchMoviesError, fetchMovies} from "./moviesSlice";

function* fetchMovieHandler(action) {
    try {
        yield delay(2200);
        const movie = yield call(getMovie, action.payload.page);
        yield put(fetchMoviesSuccess(movie))
    } catch (error) {
        yield put(fetchMoviesError(error))
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieHandler);
}
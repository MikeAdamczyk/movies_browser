import {call, put, takeLatest} from "redux-saga/effects";
import {getSearchedMoviesPage} from "./getSearchedMoviesDiffrentPage";
import {fetchMoviesSuccess, fetchMoviesError, fetchDiffrentPageSearchedMovies} from "./moviesSlice";

function* fetchChangePageSearchedMoviesHandler(action) {
    try {
        const searchedMovies = yield call(getSearchedMoviesPage, action.payload.query, action.payload.page);
        yield put(fetchMoviesSuccess(searchedMovies))
    } catch (error) {
        yield put(fetchMoviesError(error))
    }
}

export function* changePageMoviesSaga() {
    yield takeLatest(fetchDiffrentPageSearchedMovies.type, fetchChangePageSearchedMoviesHandler);
}
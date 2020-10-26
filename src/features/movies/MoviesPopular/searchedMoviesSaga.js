import { call, put, debounce } from "redux-saga/effects";
import { getSearchedMovies } from "./getSearchedMovies";
import { fetchMoviesSuccess, fetchMoviesError, fetchMoviesByQuery } from "./moviesSlice";

function* fetchSearchedMoviesHandler (action) {
  try {
    const searchedMovies = yield call(getSearchedMovies, action.payload.query, action.payload.page);
    yield put(fetchMoviesSuccess(searchedMovies))
  } catch (error) {
    yield put(fetchMoviesError(error))
  }
}

export function* searchedMoviesSaga () {
  yield debounce(2000, fetchMoviesByQuery.type, fetchSearchedMoviesHandler);
}
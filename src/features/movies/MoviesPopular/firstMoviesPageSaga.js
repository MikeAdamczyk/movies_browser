import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getFirstMoviePage } from "./getFirstMoviePage";
import { fetchMoviesSuccess, fetchMoviesError, fetchFirstMoviePage } from "./moviesSlice";

function* fetchFirstMoviePageHandler (action) {
  try {
    yield delay(3000);
    const movie = yield call(getFirstMoviePage, action.payload.page);
    yield put(fetchMoviesSuccess(movie))
  } catch (error) {
    yield put(fetchMoviesError(error))
  }
}

export function* firstMoviePageSaga () {
  yield takeLatest(fetchFirstMoviePage.type, fetchFirstMoviePageHandler);
}
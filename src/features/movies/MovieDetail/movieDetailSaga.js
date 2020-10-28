import {call, put, takeLatest} from "redux-saga/effects";
import {getMovieDetail} from "./getMovieDetail";
import {fetchMovieDetail, 
        fetchMovieDetailSuccess,
        fetchMovieDetailError
        } from "./movieDetailSlice";

function* fetchMovieDetailHandler(action) {
    try {
        const movieDetail = yield call(getMovieDetail, action.payload.id);
        yield put(fetchMovieDetailSuccess(movieDetail))
    } catch (error) {
        yield put(fetchMovieDetailError(error))
    }
}

export function* movieDetailSaga() {
    yield takeLatest(fetchMovieDetail.type, fetchMovieDetailHandler);
}
import {call, put, takeLatest, delay} from "redux-saga/effects";
import {getMovieDetail} from "./getMovieDetail";
import {fetchMovieDetail, 
        fetchMovieDetailSuccess,
        fetchMovieDetailError
        } from "./movieDetailSlice";

function* fetchMovieDetailHandler() {
    try {
        yield delay(1000)
        const movieDetail = yield call(getMovieDetail);
        yield put(fetchMovieDetailSuccess(movieDetail))
    } catch (error) {
        yield put(fetchMovieDetailError(error))
    }
}

export function* movieDetailSaga() {
    yield takeLatest(fetchMovieDetail.type, fetchMovieDetailHandler);
}